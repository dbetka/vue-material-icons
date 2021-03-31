export const logical = {
  isUndefined: value => typeof value === 'undefined',
  isString: value => typeof value === 'string',
  isNumber: value => typeof value === 'number',
  isNull: value => value === null,
  isObject: value => typeof value === 'object' && logical.isNotNull(value),
  isArray: value => Array.isArray(value),
  isFunction: value => typeof value === 'function',
  isBoolean: value => typeof value === 'boolean',
  isDefined: value => logical.isUndefined(value) === false,

  isNotString: value => logical.isString(value) === false,
  isNotNumber: value => logical.isNumber(value) === false,
  isNotNull: value => logical.isNull(value) === false,
  isNotObject: value => logical.isObject(value) === false,
  isNotArray: value => logical.isArray(value) === false,
  isNotFunction: value => logical.isFunction(value) === false,
  isNotBoolean: value => logical.isBoolean(value) === false,
};
