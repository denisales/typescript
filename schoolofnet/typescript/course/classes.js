var Pessoa = /** @class */ (function () {
    function Pessoa(name, corCabelo, altura) {
        this.name = name;
        this.corCabelo = corCabelo;
        this.altura = altura;
    }
    ;
    Pessoa.prototype.printPessoa = function () {
        console.log(this.name, this.corCabelo, this.altura);
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa('Denis', 'loiro', 1.68);
pessoa1.printPessoa();
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(name, corCabelo, altura) {
        this._name = name;
        this._corCabelo = corCabelo;
        this._altura = altura;
        Pessoa2.list.push(name);
    }
    ;
    Object.defineProperty(Pessoa2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Pessoa2.list = [];
    return Pessoa2;
}());
var pessoa2 = new Pessoa2('Deninho', 'preto', 1.20);
var pessoa3 = new Pessoa2('joao', 'preto', 1.20);
// pessoa2._name = 'Denis'
console.log(Pessoa2.list);
console.log(pessoa2);
var Pessoa4 = new Pessoa2('Carlos', 'Ruivo', 2);
console.log(Pessoa2.list);
pessoa2.name = "Alterei nome";
console.log(pessoa2.name);
