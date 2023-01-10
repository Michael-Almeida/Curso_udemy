focando = () => {
  document.getElementById("texto").style.background = "yellow";
};

validaCampo = () => {
  var campo = document.getElementById("texto").value;

  if (campo.length <= 3) {
    document.getElementById("texto").style.background = "red";
  } else {
    document.getElementById("texto").style.background = "green";
  }
};
