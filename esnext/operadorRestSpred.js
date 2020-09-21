// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objetos
const funcionario = {
    nome: 'Maria',
    salario: 12348.99
}

const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)
