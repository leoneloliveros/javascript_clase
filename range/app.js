
function rango(n1, n2) {
  var array = [];

  if (n1 < n2) {
    for (var i=n1; i <= n2; i++) {
      array.push(i);
    }
  } else {
    for (var i=n1; i >= n2; i--) {
      array.push(i);
    }
  }

  return array;
}


// function rango(n1, n2) {
//   var array = [];
//
//   for (var i=0; i < n2 - n1 + 1; i++) {
//     array[i] = n1 + i;
//   }
//
//   return array;
// }



// function rango(n1, n2) {
//   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var array2 = [];
//
//   for (var i=n1-1; i < n2; i++) {
//     array2.push(array[i]);
//   }
//
//   console.log(array2);
// }

console.log(rango(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(8, 9)); // [8, 9]
console.log(rango(4, 2));
