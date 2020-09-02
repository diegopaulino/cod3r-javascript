const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! Saiu da corrida -- Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) // remove o Massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array -- pega uma parte do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega o elemento incluindo o índice 1 até o indíce 3... resultado deve ser Alonso, Bottas, Raikkonen
console.log(algunsPilotos2)