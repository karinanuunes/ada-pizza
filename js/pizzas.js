class Pizza {
  constructor(id, nome, imagem, tamanho, preco, descricao) {
    (this.id = id),
      (this.nome = nome),
      (this.imagem = imagem),
      (this.tamanho = tamanho),
      (this.preco = preco),
      (this.descricao = descricao);
  }
}

const calabresa = new Pizza(
  1,
  "Pizza de calabresa",
  "img/pizza2.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com molho de tomate, linguiça calabresa e bastante cebola."
);

const queijo4 = new Pizza(
  2,
  "Pizza de quatro queijos",
  "img/pizza3.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com 4 tipos de queijo: mussarela, provolone, gorgonzola e parmesão."
);

const portuguesa = new Pizza(
  3,
  "Pizza portuguesa",
  "img/pizza5.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com molho de tomate, mussarela, presunto, ovos, cebolas, pimentão, azeitona e orégano."
);

const casa = new Pizza(
  4,
  "Pizza da casa",
  "img/pizza6.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com molho de tomate, mussarela, carne de sol, tomates em cubos, coentro, cebola, azeitona, catupiry e orégano."
);

const bacon = new Pizza(
  5,
  "Pizza de bacon",
  "img/pizza10.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com mussarela, bacon e orégano."
);

const frango = new Pizza(
  6,
  "Pizza de frango com catupiry",
  "img/pizza11.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com frango desfiado, catupiry e orégano."
);

const lombo = new Pizza(
  7,
  "Pizza de lombo com catupiry",
  "img/pizza12.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com lombo com catupiry e orégano."
);

const mussarela = new Pizza(
  8,
  "Pizza de mussarela",
  "img/pizza1.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com molho de tomate fresco, oregáno e muuuita mussarela"
);

const marguerita = new Pizza(
  9,
  "Pizza de marguerita",
  "img/pizza9.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com molho de tomate fresco, queijo mussarula, rodelas de tomate e manjericão"
);

const brasileira = new Pizza(
  10,
  "Pizza brasileira",
  "img/pizza4.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com molho de tomate, mussarela, calabresa picada, palmito, champignon, azeitonas e orégano"
);

const banana = new Pizza(
  11,
  "Pizza de banana com canela",
  "img/pizza7.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com mussarela, banana, canela e açúcar."
);

const chocolate = new Pizza(
  12,
  "Pizza de chocolate com morangos",
  "img/pizza8.png",
  ["Pequeno", "Médio", "Grande"],
  [35.0, 40.0, 45.0],
  "Feito com chocolate com morangos."
);
