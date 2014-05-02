(function(window) {
  function suggestPackage() {
    var p = snip$.currPath();
    if(p) {
      var parts = snip$.path.dirname(p).split(/src\/main\/groovy\/|src\/test\/groovy\//);
      if(parts.length === 2) {
        return parts[1].replace(/\//g, ".");
      }
    }
  }

  function toUpper(txt) {
    return txt ? txt.toUpperCase() : txt;
  }


  snip$.groovy = {
    suggestPackage: suggestPackage,
    toUpper: toUpper
  };

})(window);
