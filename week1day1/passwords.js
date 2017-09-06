function obfuscate(password){
  var newPw = '';
  for (var i = 0; i < password.length; i++){
    var char = password[i]
    if (char === "a"){
      newPw += '4';
    } else if (char === "e"){
      newPw += '3';
    } else if (char === "o"){
      newPw += '0';
    }else if(char === "l"){
      newPw += '1';
    } else {
      newPw += char;
    }
  }
  return newPw;
}