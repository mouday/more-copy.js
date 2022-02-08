/**
 * 写到文件
 */
const fs = require('fs');

function writeToFile(output, content) {
  // 目标文件已存在抛出异常
  if (fs.existsSync(output)) {
    throw new Error(`file exists: ${output}`);
  }

  // 同步的方式写入
  fs.writeFileSync(output, content);
}

module.exports = {
  writeToFile,
};
