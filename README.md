fis3-deploy-skip-packed
=============================

过滤掉已经被打包的资源.

示例

```js
fis.match('**', {
  deploy: [
    fis.plugin('skip-packed'),

    fis.plugin('local-deliver', {
      to: 'output'
    })
  ]
})
```

* 升级 fis3-postpackager-loader 到最新版本，如果你希望过滤掉被其 All In One 的资源。
* 升级最新的 fis3 如果你希望过滤掉已被  css sprite 了小图片。
