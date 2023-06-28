function Colaborador (nome) {
    this.nome = nome;

    this.benVindo = function () {
        console.log('Bem vindo, ' + this.nome);
    }
}

function Funcionario (nome, setor, cargo, salario) {
    this.setor = setor;
    this.cargo = cargo;
    this.salario = salario;

    Colaborador.call(this, nome)
}

const funcionario1 = new Funcionario ('Christian Roque', 'TI', 'Desenvolvedor', 37850);
const funcionario2 = new Funcionario ('Rennan Melo', 'Engenharia', 'Supervisor de projeto', 52735);
const funcionario3 = new Funcionario ('Davi Meneses', 'Financeiro', 'Diretor financeiro', 43285);

funcionario1.benVindo();
console.log(funcionario1);
funcionario2.benVindo();
console.log(funcionario2);
funcionario3.benVindo();
console.log(funcionario3);