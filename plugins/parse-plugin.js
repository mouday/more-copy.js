const path = require('path');

module.exports = function (options) {
  options.parsed_input = path.parse(options.input_filename);
  options.parsed_output = path.parse(options.output_filename);
  return options;
};
