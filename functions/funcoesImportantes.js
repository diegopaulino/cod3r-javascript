const pessoa = {
    nome: 'Diego',
    idade: 27,
    peso: 13
}

console.log(pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: true,
    value: '23/03/1993'
})

console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));