const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ');
    process.stdin.on('data', data => {
        const nome = data.toString()
        console.log([nome])

        process.stdout.write(`Olá ${ nome }!!\n`)
        process.exit()
    })
}