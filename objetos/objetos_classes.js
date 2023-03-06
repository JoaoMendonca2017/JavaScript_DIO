

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }
    else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const joao =  new Pessoa('João Pedro', 28);
const renan = new Pessoa('Renan', 29);

compararPessoas(joao, renan);
