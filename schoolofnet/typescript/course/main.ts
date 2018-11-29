function getHello(name:string){
    return `Hello ${nome}`
}


// var nome = 45;
var nome = 'Denis';

console.log(getHello(nome));


interface iCar{
    brand:string;
    name:string;
    power:number;
}


class Car{
    brand:string;
    name:string;
    age:number;
    power:number;
}

var getCar = function(car:iCar){
    console.log(car.brand, car.name, car.power);
};

var Camaro = new Car();
Camaro.name = "Camaro"
Camaro.brand = "chevrolet";
Camaro.age = 2016;
Camaro.power = 45;


getCar(Camaro);


// TIPOS TYPESCRIPT
var test:boolean = false;
var id:number = 2;

//........

var decimal:number = 5.5;
var hexadecimal:number = 0xf00d;
var binary:number = 0b1010;
var octal:number = 0o744;

//.........

var texto:string = "Denis";
var carro:string = 'Camaro';
var template:string = `Camaro`;
var text:string = `<p> Name: ${texto}</p>
                    <p> Carro: ${carro}</p>

`;

console.log(text)

//................

var frutas:string[] = ["apple", 'watermelon', 'lemon']
console.log(frutas)

var frutas:Array<string> = ["apple", 'watermelon', 'lemon']
console.log(frutas)

//..............

enum Color {Red, Green, Blue};


console.log(Color.Red)
console.log(Color[2])

//...........

var list:any = 23;
console.log(list)
list = "String ...."
console.log(list)


function printNumber(num:number):void{
    console.log(num)
}


printNumber(120000)



// DECLARACAO DE VARIAVEIS
var carro:string = "Ferrari";

function getCarro(value:string):string{
    var carro = value;
    return carro
}

console.log(getCarro("Meu carrinho"));
console.log(carro);

function testScope(){
    return carro;
}

console.log(testScope())

//.....

function testA(){
    var a = 1;
    a = 2;
    var b = testB();
    a = 3;
    return b;

    function testB(){
        return a;
    }
}

console.log(testA());


function f(value:boolean){
    let a = 100;
    if (value){
        let b = a + 1;
    }
    // return b;
}

console.log(f(true))


//..........

function g(condition:boolean,x:number):number{
    if(condition){
        let x = 100;
        //return x;
    }
    return x
}

console.log(g(true, 0))