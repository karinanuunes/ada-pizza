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
  botao.classList.add("btn-escolha");

  imgPizza.src = pizza.imagem;
  nomePizza.textContent = pizza.nome;
  tamanhoPizza.textContent = `Tamanho ${pizza.tamanho}`;
  precoPizza.textContent = `A partir de R$${pizza.preco}`;
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

function escolherTamanho() {
  const botao = document.getElementsByClassName("btn-escolha");
  botao.onclick("click", () => {
    const menuTamanho = document.getElementById("escolha");
    menuTamanho.style.display = "flex";
  });
}
