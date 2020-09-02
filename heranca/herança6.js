function Aula(nome, VideoID) {
  this.nome = nome
  this.VideoID = VideoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
  const obj = {} // Criou um objeto novo com notação literal
  obj.__proto__ = f.prototype // Associou o protipo da contante obj a função recebida por parâmetro (f)
  f.apply(obj, params) // Vai executar a função (f) passando como objeto de contexto a contante obj criada na linha 12
  return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3)
console.log(aula4)