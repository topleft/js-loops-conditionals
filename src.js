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

  joinToString: function(array) {
    var str = "";
    for (var i = 0; i < array.length; i++) {
      if (i === array.length-1)
        str += array[i]+" oh my.";
      else str += array[i]+" and ";
    };
    return str;
  },

  printBracketedNumbers: function(input){
    var str = "";
    var num = 0;
    while (num <= input){
      str += "["+num+"]";
      num++;
    }
    return str;
  },

  sumOfN: function(n){
    if (n===0)
      return n;
    else
      return n+yourCode.sumOfN(n-1);
  },

  moviesFor: function(actor){
    if (actor === "Robin Williams")
      return "Jumanji, Hook, Good Will Hunting";
    else if (actor === "Sandra Bullock")
      return "Gravity, The Lake House, The Blind Side"
    else if (actor === "Daniel Radcliffe")
      return "All of the Harry Potters";
    else return "Please provide an actor or actress";
  },

  joinWithForAndIndex: function(arr){
    var str = "";
    for (var i = 0; i < arr.length; i++) {
      str += arr[i]+i;
    }
    return str;
  },

  joinWithForAndToken: function(arr, item){
    var str = "";
    for (var i = 0; i < arr.length; i++) {
      if((i+1) === arr.length)
        str += arr[i];
      else str += arr[i]+item;
    };
    return str;
  }
}

module.exports = yourCode;