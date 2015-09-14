var inArray = process.argv
var outVal = 0
for (var i = 2; i < inArray.length; i++){
  outVal = outVal + Number(inArray[i])  
}
console.log(outVal)
