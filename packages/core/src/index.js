/**
 * 核心逻辑
 * @param {Object} param
 */
async function moreCopy({ data = {}, plugins = [] }) {
  let result = null

  // 使用插件
  for (let plugin of plugins) {
    result = await plugin.apply(data)

    // 如果返回值是false，则中断处理
    if (result === false) {
      break
    }
  }
}

module.exports = {
  moreCopy,
}
