/* 
TODO Arguments
? é uma instrução par todas funções em js que retorna algo parecido com um array 
? Contém a relação de parâmetros passados para função
! Não é um array
* representa um objeto 
* variável local do escopo da função 
TODO for in : Retorna um índice das posições que ele percorre
*/

 function soma (){
  var resultado = 0
for(var i in arguments){
  resultado +=arguments[i]
}
return resultado
 }
 console.log(soma(7,5,3.2, ' Texto'))