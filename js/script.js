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
  botao.id = "adicionar";

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

function exibirInformacoesPizza(pizza) {
  const divEscolha = document.getElementById("escolha");
  const h2Nome = document.getElementById("nomePizza");
  const imgPizza = document.getElementById("imagemPizza");
  const tamanhoPizza = document.getElementById("tamanhoPizza");
  const precoPizza = document.getElementById("precoPizza");
  const descricaoPizza = document.getElementById("descricaoPizza");
  const botaoCompra = document.getElementById("botaoCompra");
  const botaoCancelar = document.getElementById("botaoCancelar");
  const botaoAdd = document.getElementById("adicionar");
  const menu = document.getElementById("menu");

  botaoAdd.addEventListener("click", () => {
    h2Nome.textContent = pizza.nome;
    imgPizza.src = pizza.imagem;
    tamanhoPizza.innerHTML = `Tamanhos: <br><button id="botaoP" class="botaoTamanho">${pizza.tamanho[0]}</button> <button id="botaoM" class="botaoTamanho">${pizza.tamanho[1]}</button> <button id="botaoG" class="botaoTamanho">${pizza.tamanho[2]}</button>`;
    precoPizza.innerHTML = `Selecione o tamanho para visualisar o preço`;

    const botaoP = document.getElementById("botaoP");
    botaoP.addEventListener("click", () => {
      precoPizza.innerHTML = `Preço: R$ ${pizza.preco[0].toFixed(2)}`;
    });
    const botaoM = document.getElementById("botaoM");
    botaoM.addEventListener("click", () => {
      precoPizza.innerHTML = `Preço: R$ ${pizza.preco[1].toFixed(2)}`;
    });
    const botaoG = document.getElementById("botaoG");
    botaoG.addEventListener("click", () => {
      precoPizza.innerHTML = `Preço: R$ ${pizza.preco[2].toFixed(2)}`;
    });

    descricaoPizza.textContent = pizza.descricao;
    botaoCompra.textContent = "Comprar";
    botaoCompra.classList.add("btn-vermelho");
    botaoCancelar.textContent = "Cancelar";

    divEscolha.style.display = "grid";
    menu.style.opacity = "0.5";
  });

  botaoCancelar.addEventListener("click", () => {
    h2Nome.textContent = "";
    imgPizza.src = "";
    tamanhoPizza.textContent = "";
    precoPizza.textContent = "";
    descricaoPizza.textContent = "";

    divEscolha.style.display = "none";
    menu.style.opacity = "1";
  });
}

// Fase de teste
exibirInformacoesPizza(calabresa);
// exibirInformacoesPizza(queijo4);
