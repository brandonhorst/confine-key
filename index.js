var _ = require('lodash')

module.exports = {
  validate: function (obj, schema) {
    return (
      _.isPlainObject(obj) &&
      _.isNumber(obj.key) && obj.key > 0 &&
      _.isString(obj.string) &&
      _.chain(obj).keys().difference(['key', 'string', 'ctrl', 'alt', 'shift', 'meta']).isEmpty().value() &&
      (_.isUndefined(obj.ctrl) || _.isBoolean(obj.ctrl)) &&
      (_.isUndefined(obj.alt) || _.isBoolean(obj.alt)) &&
      (_.isUndefined(obj.shift) || _.isBoolean(obj.shift)) &&
      (_.isUndefined(obj.meta) || _.isBoolean(obj.meta))
    )
  },
  validateSchema: function (schema) {
    return true
  }
}
