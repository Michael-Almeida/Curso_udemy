var lista_frutas = ["Jaboticaba", "Pêra", "Morango", "Pêssego", "Abacaxi"];
//ordenação alfa numérica = .sort
console.log(lista_frutas)
console.log(lista_frutas.sort());

//para ordenação a risca de números
var numeros = [16, 25, 39, 87, 40, 4];

console.log(numeros.sort());

//funcção para ordenar certinho
var ordenanumero = (a, b) => {
  return a - b;
};

console.log(numeros.sort(ordenanumero));
