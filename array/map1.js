const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
  return e * 2
})

console.log(`Array original: ${nums} - Novo Array ${resultado}`)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
const paraDolar = e => `US$ ${parseFloat(e).toFixed(2)}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
resultado2 = nums.map(soma10).map(triplo).map(paraDolar)
console.log(resultado)
console.log(resultado2)