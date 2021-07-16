"use strict";
//typescripttypes, documentacao com os tipos
//evitar usar var. Usar let ou const
//Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//string
var nome = 'Jefferson Morais';
//array
var idades = [23, 28, 45, 32,];
var idades2 = [1, 2, 3, 4];
//tuple
var jogadores;
jogadores = ['Jefferson', 'Ana', 'Íris', 3];
//enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Rejeitado"] = 2] = "Rejeitado"; //2
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//any
var retornoDaAPI = [123, 'Jefferson', false];
var retornoDaAPI2 = {
//....
};
//void
function printNaTela(msg) {
    console.log(msg);
}
//null e undefined
var u = undefined;
var n = null;
//object
function criar(objecto) {
    //....
}
//criar('Jefferson') // gera erro
criar({
    propriedade1: 1,
    propriedade2: 2
});
//never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('algo falhou');
}
//union types
var nota = 5;
function exibirNota(nota) {
    console.log('A nota é ${nota}');
}
exibirNota('10');
exibirNota(10);
exibirNota(true);
//type Funcionarios = Array<Funcionario>; // //Array<string>; //caso não utilize objeto
var funcionarios = [{
        nome: 'Jefferson',
        sobrenome: 'M.O.',
        dataNascimento: new Date()
    }, {
        nome: 'Ana',
        sobrenome: 'S.R.',
        dataNascimento: new Date()
    },];
function tratarFuncionarios(funcionarios) {
    //.....
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
//tipo nulo
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Jeff',
    telefone1: '12345',
};
//type asserction
var minhaIdade = 34;
minhaIdade.toString();
//(<number>minhaIdade).toString();
var input = document.getElementById("numero1");
//const input = <HTMLInputElement> document.getElementById("numero1");
console.log(input.value);
