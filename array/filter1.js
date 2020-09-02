const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de pĺástico', preco: 18.99, fragil: false },
]

const caro = valor => valor.preco >= 2000
const fragil = f => f.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)

// console.log(produtos.filter(function(produto) {
//   return produto.preco > 2500
// }))