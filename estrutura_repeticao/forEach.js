var listaFuncionarios = ["Viviane", "Rosângela", "Miguel", "lucas", "Fernanda"];

/* listaFuncionarios.forEach((valor, indice, array) => {
  console.log(`indice: ${indice} | valor: ${valor}`);

  if (valor == "lucas") {
    array[indice] = "um novo valor";
  }
}); */

//encapsulando a função

console.log('Encapsulando a função:')
//função encapsulada
var f = (valor, indice, array) => {
  console.log(`indice: ${indice} | valor: ${valor}`);
};
//foreach
listaFuncionarios.forEach(f);
