import pizzas from "./pizzas.js";

function opcoesPizza() {
  const section = document.querySelector("section");
  section.innerHTML = "";

  pizzas.map((pizza) => {
    const divPizza = document.createElement("div");
    divPizza.id = "pizza";
    divPizza.classList.add(pizza.id);
    divPizza.innerHTML = `
    <img class="aj-img" src="${pizza.imagem}">
    <h3>${pizza.nome}</h3>
    <p>Tamanho ${pizza.tamanho[0]}</p>
    <p>A partir de R$${pizza.preco[0]}</p>
    <p>${pizza.descricao}</p>
    <button class="btn-vermelho" id="adicionar"">Adicionar</button>
    `;
    section.appendChild(divPizza);

    const botaoAdicionar = divPizza.querySelector("#adicionar");
    botaoAdicionar.addEventListener("click", () => {
      exibirInformacoesPizza(pizza);
    });
  });
}

opcoesPizza();

function exibirInformacoesPizza(pizza) {
  const divEscolha = document.getElementById("escolha");
  const menu = document.getElementById("menu");

  divEscolha.style.display = "grid";

  divEscolha.innerHTML = `
      <img id="imagemPizza" src="${pizza.imagem}" />
      <div id="descricao">
      <h2 id="nomePizza">${pizza.nome}</h2>
      <p id="tamanhoPizza">
      Tamanhos:
      <br>
      <button id="botaoP" class="botaoTamanho">${pizza.tamanho[0]}</button>
      <button id="botaoM" class="botaoTamanho">${pizza.tamanho[1]}</button>
      <button id="botaoG" class="botaoTamanho">${pizza.tamanho[2]}</button></p>
      <p id="precoPizza" onclick="selecionarTamanho()">Selecione o tamanho</p>
      <p id="descricaoPizza">${pizza.descricao}</p>
      <button id="botaoCompra" class="btn-vermelho">Comprar</button>
      <button id="botaoCancelar">Cancelar</button>
      </div>
      `;
  menu.style.opacity = "0.5";

  selecionarTamanho(pizza);
}

function selecionarTamanho(pizza) {
  const divEscolha = document.getElementById("escolha");
  const precoPizza = document.getElementById("precoPizza");
  const botaoCancelar = document.getElementById("botaoCancelar");
  const menu = document.getElementById("menu");

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

  botaoCancelar.addEventListener("click", () => {
    divEscolha.style.display = "none";
    menu.style.opacity = "1";
  });
}
