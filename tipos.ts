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
