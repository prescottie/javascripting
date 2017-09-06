  var phrase = process.argv[2];
function reverse(phrase){
  var newStr = "";
  for (var i = phrase.length - 1; i >= 0; i--){
    newStr += phrase[i];
  }
  return newStr;
}
console.log(reverse(phrase));