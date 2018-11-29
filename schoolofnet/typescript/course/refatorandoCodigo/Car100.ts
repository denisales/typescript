///<reference path="ICar100" />

class Car100 implements ICar100 {
    constructor(
        public name: string,
        public color: string,
        public power: number,
    ){};

    getCar():void{
        console.log(this.name, this.color, this.power);
    }
}