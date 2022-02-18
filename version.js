/**
 * version
 */
const fs = require('fs');
const path = require('path');

const package_file = path.resolve(__dirname, 'package.json');

// console.log(console.log('__dirname : ' + ));

const packageJsonData = JSON.parse(fs.readFileSync(package_file, 'utf8'));

const VERSION = packageJsonData.version;

module.exports = {
  VERSION,
};
