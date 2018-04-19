// pedirle al usuario su año de nacimiento
var year = Number(prompt("En qué año naciste?"));

if (year < 1945) {
  console.log("La Gran Generación");
} else if (year < 1966) {
  console.log("Baby Boomer");
} else if (year < 1982) {
  console.log("Generación X");
} else if (year < 1995) {
  console.log("Milenial");
} else {
  console.log("Centenial");
}
