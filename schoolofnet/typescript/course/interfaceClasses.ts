interface ICountString{
    valueTxt:string;
    countTxt():number;
}

interface IPrintTxt{
    print(value:string):void;
}


class MyText implements ICountString, IPrintTxt{
    constructor(
        public valueTxt:string
        ){};

    countTxt():number{
        return this.valueTxt.length;
    };

    print(value:string):void{
        console.log("Text: "+value)
    }
}


var t = new MyText("My name Denis");

console.log(t.countTxt());
t.print("Denis");


//.......................

interface ICarString{
    name:string;
    getCar():string;
}

interface ICarColor{
    color:string;
    getColor():string;
}

interface ICar extends ICarString, ICarColor {
    power:number;
    getPower():number;
}

class Car52 implements ICar{
    constructor(
        public name:string,
        public color:string,
        public power:number
    ){};
    getCar():string{
        return this.name;
    }

    getColor():string{
        return this.color;
    }

    getPower():number{
        return this.power;
    }
}

var camaro = new Car52("Camaro", "amarelo", 45);

console.log(camaro.getCar(), camaro.getColor(), camaro.getPower());