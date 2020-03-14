/**
 * @author Pedro Sanders
 * @since v1
 */
const AppManagerPB = require('./protos/appmanager_pb')
const {
    auth
} = require('../common/trust_util')
const redis = require('./redis')
const objectid = require('objectid')
const appmanager = require('../schemas/appmanager.schema')

const listApps = (call, callback) => {
    try {
       auth(call)
    } catch(e) {
       console.error(e)
       callback(new Error('UNAUTHENTICATED'), null)
       return
    }

    const data = { apps: [
        { ref: 'hello-world', name: 'hello-world', description:
          'Simple voice application'},
        { ref: 'presidential-poll', name: 'presidential-poll',
          description: 'Advance example'}
    ]}

    callback(null, data)
}

const getApp = (call, callback) => {
    try {
        auth(call)
    } catch(e) {
       callback(new Error('UNAUTHENTICATED'), null)
       return
    }

    const app = { ref: 'hello-world', name: 'hello-world',
        description: 'Simple voice application'}
    callback(null, app)
}

const createApp = (call, callback) => {
    try {
        auth(call)
    } catch(e) {
       callback(new Error('UNAUTHENTICATED'), null)
       return
    }

    // Validating the request
    const errors = appmanager.createAppRequest.validate({
        app: {
            name: call.request.getApp().getName(),
            description: call.request.getApp().getDescription(),
            entryPoint: call.request.getApp().getEntryPoint()
        }
    })

    if(errors.length > 0) {
        callback(new Error('INVALID_ARGUMENT'), errors[0].message)
        return
    }

    const app = call.request.getApp()
    app.setRef(objectid())
    app.setStatus(AppManagerPB.App.Status.CREATING)

    redis.call('JSON.set', app.getRef(), '.', `${JSON.stringify(app.toString())}`)
    .then(result => callback(null, app))
    .catch(e => callback(new Error(e)))
}

const updateApp = (call, callback) => {
    try {
        auth(call)
    } catch(e) {
       callback(new Error('UNAUTHENTICATED'), null)
       return
    }
    console.log(`updating app with ref: ${JSON.stringify(call.request)}`)
    // -- Operate here
    // ---
    callback(null, call.request.app)
}

const deleteApp = (call, callback) => {
    try {
        auth(call)
    } catch(e) {
       callback(new Error('UNAUTHENTICATED'), null)
       return
    }
    console.log(`deleting app with ref: ${JSON.stringify(call.request)}`)
    // -- Operate here
    // ---
    callback(null, call.request.app)
}

module.exports.listApps = listApps
module.exports.getApp = getApp
module.exports.createApp = createApp
module.exports.updateApp = updateApp
module.exports.deleteApp = deleteApp
