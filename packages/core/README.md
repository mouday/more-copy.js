# @more-copy/core

more-copy 核心包

插件的格式

```js
/**
 * 插件
 */
const plugin = {
  apply(data) {},
}
```

可配置的插件

```js
// plugin.js
/**
 * 插件
 */
class Plugin {
  constructor(options = {}) {
    this.options = options
  }

  apply(data) {}
}

module.exports = Plugin

```
