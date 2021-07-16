//typescripttypes, documentacao com os tipos
//evitar usar var. Usar let ou const

//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

//string
const nome: string = 'Jefferson Morais';

//array
const idades: number[]=[23, 28, 45, 32,];
const idades2: Array<number>=[1, 2, 3 , 4];

//tuple
let jogadores: [string, string, string, number];
jogadores = ['Jefferson', 'Ana', 'Íris', 3];


//enum
enum StatusAprovacao{
    Aprovado, //0 por definicao da linguagem
    Pendente, //1
    Rejeitado //2
}
 const statusDaAprovacao:StatusAprovacao = StatusAprovacao.Aprovado;

 //any
 const retornoDaAPI: any = [123, 'Jefferson', false];
 const retornoDaAPI2: any = {
    //....
 };

 //void
 function printNaTela(msg: string): void{
     console.log(msg);
 }

 //null e undefined
 const u: undefined = undefined;
 const n: null = null;

 //object
 function criar(objecto: object){
     //....
 }
 //criar('Jefferson') // gera erro
 criar({
     propriedade1: 1,
     propriedade2: 2
 })

//never
function loopInfinito(): never{
    while(true){ }
}

function erro(mensagem?: string): never{
    throw new Error(mensagem);
}

function falha() {
    return erro('algo falhou');
}

//union types
const nota: string | number = 5;
function exibirNota(nota: number | string | boolean){
    console.log('A nota é ${nota}');
}

exibirNota('10');
exibirNota(10);
exibirNota(true);

//alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>; // //Array<string>; //caso não utilize objeto
const funcionarios: Funcionario[] = [{//['jefferson', 'ana', 'iris'] //assim necessita passar atributo
    nome: 'Jefferson',
    sobrenome: 'M.O.',
    dataNascimento: new Date()
},{
    nome: 'Ana',
    sobrenome: 'S.R.',
    dataNascimento: new Date()
},];
function tratarFuncionarios(funcionarios: Funcionario[]){
    //.....
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}

//tipo nulo
let altura: number | null = 1.6;
altura = null;
type Contato = {
    nome: string;
    telefone1 : string;
    telefone2?: string; //|null; caso queira ter a opçao de null //? após o campo indica que ele é opcional
}

const contato: Contato = {
    nome:'Jeff',
    telefone1:'12345',
}

//type asserction

const minhaIdade: any = 34;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();


const input = document.getElementById("numero1") as HTMLInputElement;
//const input = <HTMLInputElement> document.getElementById("numero1");

console.log(input.value);
