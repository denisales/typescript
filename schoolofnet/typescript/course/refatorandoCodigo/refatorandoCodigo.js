///<reference path="ICar100" />
var Car100 = /** @class */ (function () {
    function Car100(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car100.prototype.getCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car100;
}());
///<reference path="Car100" />
var porche = new Car100("porche", "vermelho", 55);
porche.getCar();
