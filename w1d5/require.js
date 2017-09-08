function coolFunction(a){
  return privateFunction(a);
}

function privateFunction(b){
  console.log('check out `a`', b);
}

coolFunction("scott");
