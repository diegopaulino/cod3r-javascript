const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('Angular', { framework: false })

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123]
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))