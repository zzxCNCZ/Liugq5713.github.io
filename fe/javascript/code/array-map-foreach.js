// SyntaxError: Illegal break statement
[1, 2, 3, 4].map(i=>{
  if(i===2){
    break
  }
  console.log(i)
})
