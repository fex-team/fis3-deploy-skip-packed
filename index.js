
/**
 * 把被打包资源过滤掉
 */
module.exports = function(options, modified, total, callback) {

  var ignore = options.ignore || [];

  if (typeof ignore === 'string') {
    ignore = ignore.split(/[\s,]+/);
  } else if (ignore && !Array.isArray(ignore)) {
    ignore = [ignore];
  }

  ignore = ignore && ignore.map(function(str) {
    return fis.util.glob(str);
  });

  var isIgnored = function(path) {
    if (!ignore) {
      return false;
    }

    var allPassed = ignore.every(function(pattern) {
      if (pattern.test(path)) {
        return false;
      }

      return true;
    });

    return !allPassed;
  }

  var i = modified.length - 1;
  var file;

  while ((file = modified[i--])) {
    if (file.map && (
        options.skipPackedToPkg && file.map.pkg ||
        options.skipPackedToAIO && file.map.aioPkg ||
        options.skipPackedToCssSprite && file.map.cssspritePkg)) {

      // 检查是否 ignore 了
      if (ignore && isIgnored(file.subpath)) {
        continue;
      }

      modified.splice(i + 1, 1);
    }
  }

  i = total.length - 1;
  while ((file = total[i--])) {
    if (file.map && (
        options.skipPackedToPkg && file.map.pkg ||
        options.skipPackedToAIO && file.map.aioPkg ||
        options.skipPackedToCssSprite && file.map.cssspritePkg)) {

      // 检查是否 ignore 了
      if (ignore && isIgnored(file.subpath)) {
        continue;
      }

      total.splice(i + 1, 1);
    }
  }

  callback();
};

module.exports.options = {
  skipPackedToPkg: true,
  skipPackedToAIO: true,
  skipPackedToCssSprite: true,
  ignore: null
  // ignore: ['/src/**']
};
