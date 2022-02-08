const path = require('path');

module.exports = function (options) {
  options.parsed_input = path.parse(options.input);
  options.parsed_output = path.parse(options.output);
  return options;
};
