module.exports = function (dt) {
  return dt.items && dt.items.length && 'webkitGetAsEntry' in dt.items[0]
}
