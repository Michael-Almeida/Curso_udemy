//Imprimindo array com for
/* var listaFrutas = ["Banana", "Maça", "Peira", "Laranja", "Morango"];

for (var i = 0; i < listaFrutas.length; i++) {
  console.log(listaFrutas[i]);
} */

//Tabuada com for
/* for (var x = 0; x <= 10; x++) {
  for (var y = 0; y <= 10; y++) {
    console.log(`${x} X ${y} = ${x * y} `);
  }
  console.log("======================");
} */

//imprimindo tabuada com while
var x = 1;
var y = 1;

while (x <= 10) {
  y = 1;
  while (y <= 10) {
    console.log(`${x} X ${y} = ${x*y}`);
    y++;
  }
  console.log('__________________')
  x++;
}
