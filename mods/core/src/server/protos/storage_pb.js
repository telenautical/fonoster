/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf')
var goog = jspb
var global = Function('return this')()

goog.exportSymbol(
  'proto.fonos.storage.v1alpha1.GetObjectURLRequest',
  null,
  global
)
goog.exportSymbol(
  'proto.fonos.storage.v1alpha1.GetObjectURLResponse',
  null,
  global
)
goog.exportSymbol(
  'proto.fonos.storage.v1alpha1.UploadObjectRequest',
  null,
  global
)
goog.exportSymbol(
  'proto.fonos.storage.v1alpha1.UploadObjectResponse',
  null,
  global
)

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.fonos.storage.v1alpha1.UploadObjectRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.fonos.storage.v1alpha1.UploadObjectRequest.displayName =
    'proto.fonos.storage.v1alpha1.UploadObjectRequest'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.fonos.storage.v1alpha1.UploadObjectRequest.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.fonos.storage.v1alpha1.UploadObjectRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.fonos.storage.v1alpha1.UploadObjectRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ''),
        bucket: jspb.Message.getFieldWithDefault(msg, 2, ''),
        chunks: msg.getChunks_asB64(),
        metadataMap: (f = msg.getMetadataMap())
          ? f.toObject(includeInstance, undefined)
          : []
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fonos.storage.v1alpha1.UploadObjectRequest}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.fonos.storage.v1alpha1.UploadObjectRequest()
  return proto.fonos.storage.v1alpha1.UploadObjectRequest.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fonos.storage.v1alpha1.UploadObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fonos.storage.v1alpha1.UploadObjectRequest}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setName(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setBucket(value)
        break
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes())
        msg.setChunks(value)
        break
      case 4:
        var value = msg.getMetadataMap()
        reader.readMessage(value, function (message, reader) {
          jspb.Map.deserializeBinary(
            message,
            reader,
            jspb.BinaryReader.prototype.readString,
            jspb.BinaryReader.prototype.readString,
            null,
            ''
          )
        })
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.fonos.storage.v1alpha1.UploadObjectRequest.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fonos.storage.v1alpha1.UploadObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getName()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
  f = message.getBucket()
  if (f.length > 0) {
    writer.writeString(2, f)
  }
  f = message.getChunks_asU8()
  if (f.length > 0) {
    writer.writeBytes(3, f)
  }
  f = message.getMetadataMap(true)
  if (f && f.getLength() > 0) {
    f.serializeBinary(
      4,
      writer,
      jspb.BinaryWriter.prototype.writeString,
      jspb.BinaryWriter.prototype.writeString
    )
  }
}

/**
 * optional string name = 1;
 * @return {string}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/** @param {string} value */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.setName = function (
  value
) {
  jspb.Message.setProto3StringField(this, 1, value)
}

/**
 * optional string bucket = 2;
 * @return {string}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.getBucket = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}

/** @param {string} value */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.setBucket = function (
  value
) {
  jspb.Message.setProto3StringField(this, 2, value)
}

/**
 * optional bytes chunks = 3;
 * @return {!(string|Uint8Array)}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.getChunks = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    3,
    ''
  ))
}

/**
 * optional bytes chunks = 3;
 * This is a type-conversion wrapper around `getChunks()`
 * @return {string}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.getChunks_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunks()))
}

/**
 * optional bytes chunks = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunks()`
 * @return {!Uint8Array}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.getChunks_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunks()))
}

/** @param {!(string|Uint8Array)} value */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.setChunks = function (
  value
) {
  jspb.Message.setProto3BytesField(this, 3, value)
}

/**
 * map<string, string> metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.getMetadataMap = function (
  opt_noLazyCreate
) {
  return /** @type {!jspb.Map<string,string>} */ (jspb.Message.getMapField(
    this,
    4,
    opt_noLazyCreate,
    null
  ))
}

proto.fonos.storage.v1alpha1.UploadObjectRequest.prototype.clearMetadataMap = function () {
  this.getMetadataMap().clear()
}

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fonos.storage.v1alpha1.UploadObjectResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.fonos.storage.v1alpha1.UploadObjectResponse, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.fonos.storage.v1alpha1.UploadObjectResponse.displayName =
    'proto.fonos.storage.v1alpha1.UploadObjectResponse'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.fonos.storage.v1alpha1.UploadObjectResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.fonos.storage.v1alpha1.UploadObjectResponse.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.fonos.storage.v1alpha1.UploadObjectResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.fonos.storage.v1alpha1.UploadObjectResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        size: jspb.Message.getFieldWithDefault(msg, 1, 0)
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fonos.storage.v1alpha1.UploadObjectResponse}
 */
proto.fonos.storage.v1alpha1.UploadObjectResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.fonos.storage.v1alpha1.UploadObjectResponse()
  return proto.fonos.storage.v1alpha1.UploadObjectResponse.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fonos.storage.v1alpha1.UploadObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fonos.storage.v1alpha1.UploadObjectResponse}
 */
proto.fonos.storage.v1alpha1.UploadObjectResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32())
        msg.setSize(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fonos.storage.v1alpha1.UploadObjectResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.fonos.storage.v1alpha1.UploadObjectResponse.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fonos.storage.v1alpha1.UploadObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.storage.v1alpha1.UploadObjectResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getSize()
  if (f !== 0) {
    writer.writeInt32(1, f)
  }
}

/**
 * optional int32 size = 1;
 * @return {number}
 */
proto.fonos.storage.v1alpha1.UploadObjectResponse.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0))
}

/** @param {number} value */
proto.fonos.storage.v1alpha1.UploadObjectResponse.prototype.setSize = function (
  value
) {
  jspb.Message.setProto3IntField(this, 1, value)
}

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.fonos.storage.v1alpha1.GetObjectURLRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.fonos.storage.v1alpha1.GetObjectURLRequest.displayName =
    'proto.fonos.storage.v1alpha1.GetObjectURLRequest'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.fonos.storage.v1alpha1.GetObjectURLRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.fonos.storage.v1alpha1.GetObjectURLRequest.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.fonos.storage.v1alpha1.GetObjectURLRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.fonos.storage.v1alpha1.GetObjectURLRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ''),
        bucket: jspb.Message.getFieldWithDefault(msg, 2, '')
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fonos.storage.v1alpha1.GetObjectURLRequest}
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.fonos.storage.v1alpha1.GetObjectURLRequest()
  return proto.fonos.storage.v1alpha1.GetObjectURLRequest.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fonos.storage.v1alpha1.GetObjectURLRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fonos.storage.v1alpha1.GetObjectURLRequest}
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setName(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setBucket(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.fonos.storage.v1alpha1.GetObjectURLRequest.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fonos.storage.v1alpha1.GetObjectURLRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getName()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
  f = message.getBucket()
  if (f.length > 0) {
    writer.writeString(2, f)
  }
}

/**
 * optional string name = 1;
 * @return {string}
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/** @param {string} value */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.prototype.setName = function (
  value
) {
  jspb.Message.setProto3StringField(this, 1, value)
}

/**
 * optional string bucket = 2;
 * @return {string}
 */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.prototype.getBucket = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}

/** @param {string} value */
proto.fonos.storage.v1alpha1.GetObjectURLRequest.prototype.setBucket = function (
  value
) {
  jspb.Message.setProto3StringField(this, 2, value)
}

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fonos.storage.v1alpha1.GetObjectURLResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.fonos.storage.v1alpha1.GetObjectURLResponse, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.fonos.storage.v1alpha1.GetObjectURLResponse.displayName =
    'proto.fonos.storage.v1alpha1.GetObjectURLResponse'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.fonos.storage.v1alpha1.GetObjectURLResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.fonos.storage.v1alpha1.GetObjectURLResponse.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.fonos.storage.v1alpha1.GetObjectURLResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.fonos.storage.v1alpha1.GetObjectURLResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        url: jspb.Message.getFieldWithDefault(msg, 1, '')
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fonos.storage.v1alpha1.GetObjectURLResponse}
 */
proto.fonos.storage.v1alpha1.GetObjectURLResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.fonos.storage.v1alpha1.GetObjectURLResponse()
  return proto.fonos.storage.v1alpha1.GetObjectURLResponse.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fonos.storage.v1alpha1.GetObjectURLResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fonos.storage.v1alpha1.GetObjectURLResponse}
 */
proto.fonos.storage.v1alpha1.GetObjectURLResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setUrl(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fonos.storage.v1alpha1.GetObjectURLResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.fonos.storage.v1alpha1.GetObjectURLResponse.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fonos.storage.v1alpha1.GetObjectURLResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.storage.v1alpha1.GetObjectURLResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getUrl()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
}

/**
 * optional string url = 1;
 * @return {string}
 */
proto.fonos.storage.v1alpha1.GetObjectURLResponse.prototype.getUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/** @param {string} value */
proto.fonos.storage.v1alpha1.GetObjectURLResponse.prototype.setUrl = function (
  value
) {
  jspb.Message.setProto3StringField(this, 1, value)
}

goog.object.extend(exports, proto.fonos.storage.v1alpha1)
