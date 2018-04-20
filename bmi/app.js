// definir un objeto literal con tres propiedades:
// * peso
// * altura
// * bmi (método)
//
// bmi (body mass index) es el índice de masa corporal.

var pedro = {
  peso: 60,
  altura: 1.8,
  bmi: function() {
    return this.peso / this.altura**2;
  }
}

var juan = {
  peso: 80,
  altura: 1.65,
  bmi: function() {
    return this.peso / this.altura**2;
  }
}

console.log("Pedro: " + pedro.bmi());
console.log("Juan: " + juan.bmi());
