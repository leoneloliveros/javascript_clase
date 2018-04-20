## Ejericios JavaScript

1. Escribe una función llamada `mayorQueDiez` que reciba un argumento llamado `num` y retorne `true` si `num` es mayor a diez o `false` de lo contrario.

    ```js
    mayorQueDiez(12); // true
    mayorQueDiez(9); // false
    ```

2. Escribe una función llamada `rango` que reciba dos argumentos: `n1` y `n2`. La función debe retornar un arreglo con todos los números de `n1` a `n2`.

    ```js
    rango(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    rango(8, 9); // [8, 9]
    rango(4, 2); // [4, 3, 2] (opcional)
    ```

3. Escribe una función llamada `pares` que reciba un argumento `arr` (un arreglo) y retorne un nuevo arreglo que incluya sólo las posiciones pares (0, 2, 4, etc.):

    ```js
    pares([0, 1, 2, 3, 4]); // [0, 2, 4]
    pares(["m", "p", "a", "u", "k", "0", "e"]); // ["m", "a", "k", "e"]
    ```

4. Escribir una función llamada `triqui` que reciba un argumento `board` (un arreglo de arreglos) y retorne `true` si hay triqui, `false` de lo contrario.

   ```js
   triqui([
     ["X", "O", "-"],
     ["O", "O", "X"],
     ["-", "O", "X"]
   ]); // true

   triqui([
     ["X", "X", "-"],
     ["O", "O", "X"],
     ["-", "O", "X"]
   ]); // false
   ```

5. Escribir una función `total` que reciba un arreglo de objetos y sume todas las propiedades `price`:

    ```js
    var products = [
      { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
      { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
      { id: 3, name: "Lavadora", price: 100, categories: ["electrodomésticos"] }
    ];
    total(products); // 300
