class Pessoa{
    constructor(
        public name:string, 
        public corCabelo:string, 
        public altura:number
        ){};

    printPessoa():void {
        console.log(this.name, this.corCabelo, this.altura);
    }
}


var pessoa1 = new Pessoa('Denis', 'loiro', 1.68);

pessoa1.printPessoa();



class Pessoa2{
    private _name:string;
    private _corCabelo:string;
    private _altura:number;
    public static list:Array<string> = []

    constructor(name:string, corCabelo:string, altura:number){
        this._name = name;
        this._corCabelo = corCabelo;
        this._altura = altura;
        Pessoa2.list.push(name);
    };

    get name():string {
        return this._name
    }

    set name(value:string){
        this._name = value;
    }
}

var pessoa2 = new Pessoa2('Deninho', 'preto', 1.20);
var pessoa3 = new Pessoa2('joao', 'preto', 1.20);
// pessoa2._name = 'Denis'
console.log(Pessoa2.list);
console.log(pessoa2)

var Pessoa4 = new Pessoa2('Carlos', 'Ruivo', 2);
console.log(Pessoa2.list);

pessoa2.name = "Alterei nome";
console.log(pessoa2.name)