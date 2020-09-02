const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit e Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json) // JSON.parse converte um JSON para um Objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)