const { moreCopy } = require("../src/index.js");
const more_copy_config = require("./mysql-demo/more-copy.config.js");

moreCopy({
  config: more_copy_config,
})
  .then((res) => {
    console.log("成功");
  })
  .catch((err) => {
    console.log(err);
  });
