/* 
? try: Tente 
! catch: Pegar
* finally: Finalmente
? Throw: Lançar


TODO 1º try: Para lançar todo código passífico de erro
TODO 2º cath e finally ou só finaly: Para tratar e finalizar ou só finalizar
TODO 3º Throw: Lançar exceções, mensagem customizada
 */

var video = Array();

video[1] = Array();
video[1]["nome"] = "Peaky Blinders";
video[1]["Categoria"] = "Ação";

var getvideo = () => {
  try {
    // todo código passífico de erro fica aqui

    console.log(video[0]["nome"]);
  } catch (erro) {
    // É usado para tratar o erro, recebe o erro como parâmetro
    tratarErro(erro); //demonstra o erro

    console.log("Agora sim podemos tratar esse erro");
    throw new Error(
      "Houve um erro mas não se preocupe estamos trabalhando nisso agora!"
    );
  } finally {
    // finally: para finalizar a tentativa

    console.log("Sempre passa por aqui (try/catch");
  }

  console.log("A aplicaçã não morreu");
};

var tratarErro = (e) => {
  console.log(e);
};
getvideo(video);
