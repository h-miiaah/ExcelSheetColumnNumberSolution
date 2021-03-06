/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    var res = 0;
    var num = 0;
    var len = columnTitle.length;
    for (var i = 0; i < len; i++) {
        num = getNum(columnTitle[len - 1 - i]);
        res += Math.pow(26, i) * num;
      }
      return res;
  };

  var getNum = function (char) {
    var start = 'A'.charCodeAt(0) - 1;
    return char.charCodeAt(0) - start;
  };


  /*

  - Start by initializing a variable called res to 0.
  - Then loop through the characters in the column title string.
  - For each character, we get the number of the character by subtracting the ASCII value of ‘A’ from the character’s ASCII value.
  - Then multiply the number by the power of 26 raised to the index of the character.
  - Finally, we add the result to res.
  
  */
 