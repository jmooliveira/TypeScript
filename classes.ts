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
