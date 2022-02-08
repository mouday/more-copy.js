/**
 * version
 */
const fs = require('fs');

const packageJsonData = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const VERSION = packageJsonData.version;

module.exports = {
  VERSION,
};
