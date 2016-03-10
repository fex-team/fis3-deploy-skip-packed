fis3-deploy-skip-packed
=============================

过滤掉已经被打包的资源.

示例

```js
fis.match('**', {
  deploy: [
    fis.plugin('skip-packed', {
      // 配置项
    }),

    fis.plugin('local-deliver', {
      to: 'output'
    })
  ]
})
```

* 升级 fis3-postpackager-loader 到最新版本，如果你希望过滤掉被其 All In One 的资源。
* 升级最新的 fis3 如果你希望过滤掉已被  css sprite 了小图片。

## 配置项说明

* `skipPackedToPkg` 默认 `true` 是否过滤掉被打包的文件
* `skipPackedToAIO` 默认 `true` 是否过滤掉被 AllInOne 打包的文件
* `skipPackedToCssSprite` 默认为 `true` 是否过滤掉被 css sprite 合并的文件。
* `ignore` 即便设置了过滤，但是如果目标文件 ignore 列表中，还是不会被过滤。glob 语法，数组或者字符串。
