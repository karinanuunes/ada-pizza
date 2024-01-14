function opcoesPizza(pizza) {
  const section = document.querySelector("section");
  const divPizza = document.createElement("div");
  const imgPizza = document.createElement("img");
  imgPizza.classList.add("aj-img");
  const nomePizza = document.createElement("h3");
  const tamanhoPizza = document.createElement("p");
  const precoPizza = document.createElement("p");
  const descricaoPizza = document.createElement("p");
  const botao = document.createElement("button");
  botao.classList.add("btn-vermelho");
  botao.id = "btn-escolha";

  imgPizza.src = pizza.imagem;
  nomePizza.textContent = pizza.nome;
  tamanhoPizza.textContent = `Tamanho ${pizza.tamanho[0]}`;
  precoPizza.textContent = `A partir de R$${pizza.preco[0]}`;
  descricaoPizza.textContent = pizza.descricao;
  botao.textContent = "Adicionar";

  divPizza.appendChild(imgPizza);
  divPizza.appendChild(nomePizza);
  divPizza.appendChild(tamanhoPizza);
  divPizza.appendChild(precoPizza);
  divPizza.appendChild(descricaoPizza);
  divPizza.appendChild(botao);

  section.appendChild(divPizza);
}

opcoesPizza(calabresa);
opcoesPizza(queijo4);
opcoesPizza(portuguesa);
opcoesPizza(casa);
opcoesPizza(bacon);
opcoesPizza(frango);
opcoesPizza(lombo);
opcoesPizza(mussarela);
opcoesPizza(marguerita);
opcoesPizza(brasileira);
opcoesPizza(banana);
opcoesPizza(chocolate);

// const botao = document.getElementById("btn-escolha");
// botao.addEventListener("click", escolherTamanho);

// function escolherTamanho() {
//   const menuTamanho = document.getElementById("escolha");
//   menuTamanho.style.display = "flex";

//   const pizzaEscolhida = document.createElement("div");
//   pizzaEscolhida.textContent = calabresa.nome;

//   menuTamanho.appendChild(pizzaEscolhida);
// }

function exibirInformacoesPizza(pizza) {
  let divEscolha = document.getElementById("escolha");
  let h2Nome = document.getElementById("nomePizza");
  let imgPizza = document.getElementById("imagemPizza");
  let tamanhoPizza = document.getElementById("tamanhoPizza");
  let precoPizza = document.getElementById("precoPizza");
  let descricaoPizza = document.getElementById("descricaoPizza");
  let botaoCompra = document.getElementById("botaoCompra");
  let botaoCancelar = document.getElementById("botaoCancelar");

  h2Nome.textContent = pizza.nome;
  imgPizza.src = pizza.imagem;
  tamanhoPizza.textContent = `Tamanho: ${pizza.tamanho[0]}`;
  precoPizza.textContent = `Preço: $${pizza.preco[0]}`;
  descricaoPizza.textContent = pizza.descricao;

  botaoCompra.textContent = "Comprar";
  botaoCompra.classList.add("btn-vermelho");
  botaoCancelar.textContent = "Cancelar";

  divEscolha.style.display = "grid";

  botaoCancelar.addEventListener("click", () => {
    divEscolha.style.display = "none";
  });
}

// Fase de teste
// exibirInformacoesPizza(calabresa);
