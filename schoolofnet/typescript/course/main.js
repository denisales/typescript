function getHello(name) {
    return "Hello " + nome;
}
// var nome = 45;
var nome = 'Denis';
console.log(getHello(nome));
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
Camaro.name = "Camaro";
Camaro.brand = "chevrolet";
Camaro.age = 2016;
Camaro.power = 45;
getCar(Camaro);
// TIPOS TYPESCRIPT
var test = false;
var id = 2;
//........
var decimal = 5.5;
var hexadecimal = 0xf00d;
var binary = 10;
var octal = 484;
//.........
var texto = "Denis";
var carro = 'Camaro';
var template = "Camaro";
var text = "<p> Name: " + texto + "</p>\n                    <p> Carro: " + carro + "</p>\n\n";
console.log(text);
//................
var frutas = ["apple", 'watermelon', 'lemon'];
console.log(frutas);
var frutas = ["apple", 'watermelon', 'lemon'];
console.log(frutas);
//..............
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[2]);
//...........
var list = 23;
console.log(list);
list = "String ....";
console.log(list);
function printNumber(num) {
    console.log(num);
}
printNumber(120000);
// DECLARACAO DE VARIAVEIS
var carro = "Ferrari";
function getCarro(value) {
    var carro = value;
    return carro;
}
console.log(getCarro("Meu carrinho"));
console.log(carro);
function testScope() {
    return carro;
}
console.log(testScope());
//.....
function testA() {
    var a = 1;
    a = 2;
    var b = testB();
    a = 3;
    return b;
    function testB() {
        return a;
    }
}
console.log(testA());
function f(value) {
    var a = 100;
    if (value) {
        var b = a + 1;
    }
    // return b;
}
console.log(f(true));
//..........
function g(condition, x) {
    if (condition) {
        var x_1 = 100;
        //return x;
    }
    return x;
}
console.log(g(true, 0));
