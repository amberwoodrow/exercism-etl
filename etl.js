function transform(old) {
  var newFormat = {};

  for (var key in old) {
    for (var i=0; i<old[key].length; i++) {
      newFormat[old[key][i].toLowerCase()] = +key;
    }
  }
  return newFormat;
}

module.exports = transform;