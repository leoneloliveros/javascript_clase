


// function pares(arr) {
//   var array = [];
//   for (var i = 0; i < arr.length; i += 2) {
//     array.push(arr[i]);
//   }
//
//   return array;
// }

function pares(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) { // i = 0
    if (i % 2 === 0) {
      ret.push(arr[i]);
    }
  }

  return ret;
}

console.log(pares([0, 1, 2, 3, 4])); // [0, 2, 4]
console.log(pares(["m", "p", "a", "u", "k", "0", "e"])); // ["m", "a", "k", "e"]
