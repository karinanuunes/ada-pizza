function opcoesPizza(pizza) {
  const section = document.querySelector("section");
  const divPizza = document.createElement("div");
  const imgPizza = document.createElement("img");
  imgPizza.classList.add("aj-img");
  const nomePizza = document.createElement("h3");
  const tamanhoPizza = document.createElement("p");
  const precoPizza = document.createElement("p");
  const descricaoPizza = document.createElement("p");

  imgPizza.src = pizza.imagem;
  nomePizza.textContent = pizza.nome;
  tamanhoPizza.textContent = `Tamanho ${pizza.tamanho}`;
  precoPizza.textContent = `A partir de R$${pizza.preco}`;
  descricaoPizza.textContent = pizza.descricao;

  divPizza.appendChild(imgPizza);
  divPizza.appendChild(nomePizza);
  divPizza.appendChild(tamanhoPizza);
  divPizza.appendChild(precoPizza);
  divPizza.appendChild(descricaoPizza);

  section.appendChild(divPizza);
}

opcoesPizza(calabresa);
opcoesPizza(queijo4);
opcoesPizza(portuguesa);
opcoesPizza(casa);
opcoesPizza(bacon);
opcoesPizza(frango);
opcoesPizza(lombo);
opcoesPizza(banana);
opcoesPizza(chocolate);
