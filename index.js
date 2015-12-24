
/**
 * 把被打包资源过滤掉
 */
module.exports = function(options, modified, total, callback) {

  var i = modified.length - 1;
  var file;

  while ((file = modified[i--])) {
    if (file.map && (file.map.pkg || file.map.aioPkg || file.map.cssspritePkg)) {
      modified.splice(i + 1, 1);
    }
  }

  i = total.length - 1;
  while ((file = total[i--])) {
    if (file.map && (file.map.pkg || file.map.aioPkg || file.map.cssspritePkg)) {
      total.splice(i + 1, 1);
    }
  }

  callback();
};
