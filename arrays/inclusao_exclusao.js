var listaCoisas = Array();
listaCoisas["frutas"] = ["Maça", "Melão", "Banana"];
listaCoisas["pessoas"] = ["Maria", "José"];

listaCoisas["frutas"].push("Jaca");
listaCoisas["frutas"].unshift("Mamão");

listaCoisas["pessoas"].push("Reinaldo");
listaCoisas["pessoas"].unshift("Ivone lara");

console.log(listaCoisas);

//remove o último
listaCoisas["pessoas"].shift();

//remove o primeiro item do array
listaCoisas["frutas"].pop();

console.log(listaCoisas);
