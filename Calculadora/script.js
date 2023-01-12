var calcular = (tipo, valor) => {
  if (tipo === "acao") {
    if (valor === "c") {
      //limpar o visor (id resultado)
      document.getElementById("resultado").value = "";
    }
    //caindo neste bloco ele irá fazer a concatenação
    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
    }
  
    if (valor === "=") {
      //eval processa o valor do input
      var valor_campo = eval(document.getElementById("resultado").value);
      //atribui o valor a resultado
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    //criar uma variável para salvar o valor atribuido pelo botão
    //concatenar o valor inserido anteriormente com o valor atual
    document.getElementById("resultado").value += valor;
  }
};
