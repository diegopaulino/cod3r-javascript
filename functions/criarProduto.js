// Função factory é uma função que retorna um objeto.
// Abaixo tem uma função que recebe nome e preço como parâmetro e retorna um objeto com nome, preço e desconto.
function criarProduto(nome, preco) {
    return {
        nome: nome,
        preço: preco,
        desconto: 0.1
    }
}

// Mostra no console o retorno da chamada da função "criarProduto".
// O resultado deve ser { 'nome': 'Santo Mel', 'preço': 21, desconto: 0.1 }
console.log(criarProduto('Santo Mel', 21.00));