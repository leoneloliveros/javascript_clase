var arr = [1, "hola", true];

// obteniendo la posición de un arreglo
arr[0] // 1
arr[1] // "hola"
arr[2] // true

// recorremos
for (var i=0; i < arr.length; i++) {
  console.log(arr[i]);
}

// reemplazar un elemento
arr[1] = "mundo";
console.log(arr[1]);

// insertar nuevos elementos
arr.push("nuevo elemento");

// eliminando elementos
arr.splice(3, 1);

// matrices
var matrix = [
  ["X", "O", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
];

for (var i=0; i < matrix.length; i++) {
  for (var j=0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
