// pensar un número del 1 al 10
var secret = Math.floor(Math.random() * 10 + 1);
// imprimir el número en la consola
console.log("El número es " + secret);

var adivino = false;
for (var i=0; !adivino && i < 3; i++) {
  var num = Number(prompt("Adivina el número:"));
  if (num === secret) {
    adivino = true;
    console.log("Muy bien, el número es correcto");
  } else {
    console.log("No, ese no es el número");
  }
}

if (!adivino) {
  console.log("Agotaste tus intentos!");
}
