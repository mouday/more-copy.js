/**
 * 类型枚举值
 */
const typeEnum = {
  NUMBER: 'number',
  STRING: 'string',
  BOOLEAN: 'boolean',
  ARRAY: 'array',
  OBJECT: 'object',
  FUNCTION: 'function',
  UNDEFINED: 'undefined',
  NULL: 'null',
  DATE: 'date',
  REGEXP: 'regexp',
  ERROR: 'error',
}

/**
 * 获取对象的数据类型
 * @param obj
 * @returns string
 */
function getType(obj) {
  // 如果不是object类型的数据，直接用typeof就能判断出来

  const objType = typeof obj

  if (objType !== typeEnum.OBJECT) {
    return objType
  }

  // 如果是object类型数据，准确判断类型必须使用Object.prototype.toString.call(obj)的方式才能判断
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLowerCase()
}

/**
 * 判断是否为对象
 * @param value
 * @returns boolean
 */
function isObject(value) {
  return getType(value) == typeEnum.OBJECT
}

/**
 * 判断是否是数组
 * @param value
 * @returns boolean
 */
function isArray(value) {
  return Array.isArray(value)
}

/**
 * 判断是否是函数
 * @param value
 * @returns boolean
 */
function isFunction(value) {
  return getType(value) == typeEnum.FUNCTION
}

/**
 * 判断对象是否为空
 * null {} [] "" 0 false
 * @param {any} value
 */
function isEmpty(value) {
  if (!value) {
    // false null "" 0
    return true
  } else if (isObject(value)) {
    // 空对象 {}
    return JSON.stringify(value) == '{}'
  } else if (isArray(value)) {
    // 空数组 []
    return value.length == 0
  } else {
    // 非空值
    return false
  }
}

module.exports = {
  isFunction,
}
