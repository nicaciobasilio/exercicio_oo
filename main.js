function Discente(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Alemao(nome, idade, curso) {
    this.curso = curso;

    Discente.call(this, nome, idade);
}

function Ingles(nome, idade, curso) {
    this.curso = curso;

    Discente.call(this, nome, idade);
}

const pedro = new Discente("Pedro", 16);
const maria = new Alemao("Maria", 23, "Alemão");
const jose = new Ingles("José", 32, "Inglês");

console.log(pedro);
console.log(maria);
console.log(jose);