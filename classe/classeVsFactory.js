class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
const p2 = new Pessoa('Diego');
p1.falar();
p2.falar();

const pessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

p3 = pessoa('Didico');
p3.falar();