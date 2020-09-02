aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // primeiro parâmetro define o index, segundo parâmetro define a quantidade de itens a partir daquele index
aprovados.splice(1, 3, 'Elemento1', 'Elemento2') // Os demais parâmetros após o segundo parâmetro são as informações que serão adicionada ao array
console.log(aprovados)

aprovados[3] = 'Dieguxo'
aprovados.push('Jere')
aprovados[20] = 'Iaguinho'
aprovados.sort()
console.log(aprovados)