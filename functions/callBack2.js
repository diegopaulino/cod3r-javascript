const notas = [6.5, 4.2, 3.1, 7, 9, 10];

const notasBaixas = notas.filter(function(nota) {
    return nota < 7;
})

const notasAltas = notas.filter((nota) => nota >= 7);

console.log(`Aprovados: ${notasAltas} `)
console.log(`Reprovados: ${notasBaixas}`);