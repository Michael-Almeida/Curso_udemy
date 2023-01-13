var objetos = ["cadeira", "impressora", "garfo"];

var adicionar = () => {
  //recurperando o valro do texto
  var objeto = document.getElementById("objeto").value;

  if (objeto === "") {
    alert("Digite um valor válido");
  }
  if (objetos.indexOf(objeto) !== -1) {
    alert("objeto já adicionao");
  } else {
    objetos.push(objeto);
  }
  console.log(objetos)
};

var ordenar = () => {
  var ordenado = objetos.sort();
  console.log(ordenado)
};
