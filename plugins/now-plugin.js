module.exports = function (options) {
  let now = new Date();

  let data = {
    fullYear: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  };

  options.now = data;
  return options;
};
