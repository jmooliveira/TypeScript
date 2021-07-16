class Data{
    //public dia: number;
    //mes: number;//private mes: number -> faz com que o acesso seja apenas dentro da classe
    //ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970){
    //    this.dia = dia;
    //    this.mes = mes;
    //    this.ano = ano; 
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes);

const data2 = new Data(1,1);

//TypeScrip Playgroun : site para rodar TS -> JS

class Carro{

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){}

    private alterarVelocidade(delta: number){
        //if(this.velocidadeAtual + number <= this.velocidadeMaxima){
        //    this.velocidadeAtual += number;
        //}
        //FAZER VALIDACAO DE ACELERACAO E FRENAGEM
        //this.velocidadeAtual = XXX

        const novaVelocidade = this.velocidadeAtual + delta;
        //alteração
        if(novaVelocidade >= 0&& novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

    }

    acelerar(){
        const aceleracao = 5;
        //if(this.velocidadeAtual + aceleracao <= this.velocidadeMaxima){
        //    this.velocidadeAtual += aceleracao;
        // }
        this.alterarVelocidade(5);
    }
    
    frear(){
        const frenagem = 5;
        //this.velocidadeAtual -= aceleracao;
        this.alterarVelocidade(-5);
    }
}
const carro = new Carro('Chevrolet', 'Prisma', 250);
//carro.velocidadeMaxima = 400; //nao pode, esta dentro da classe

carro.acelerar();

//a partir daqui

//Herança
class Camaro extends Carro{
    private turbo = false;
    constructor(){
        super('Chevrolet', 'Camaro', 500)
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
