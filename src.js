var yourCode = {
  commafy: function(n) {
    var str = "";
    var count = 0;
    for (var i = n; i > 0; i--) {
      count ++;
      if(count === n) str += count;
      else str += count+",";
    }
    return str;
  },

  joinToString: function(array) {}
}

module.exports = yourCode;