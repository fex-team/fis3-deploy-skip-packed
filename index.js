
/**
 * 把被打包资源过滤掉
 */
module.exports = function(options, modified, total, callback) {

  var i = modified.length - 1;
  var file;

  while ((file = modified[i--])) {
    if (file.map && file.map.pkg) {
      modified.splice(i + 1, 1);
    }
  }

  i = total.length;
  while ((file = total[i--])) {
    if (file.map && file.map.pkg) {
      total.splice(i + 1, 1);
    }
  }

  callback();
};
