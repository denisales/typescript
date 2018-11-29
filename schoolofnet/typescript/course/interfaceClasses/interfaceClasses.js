var MyText = /** @class */ (function () {
    function MyText(valueTxt) {
        this.valueTxt = valueTxt;
    }
    ;
    MyText.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    ;
    MyText.prototype.print = function (value) {
        console.log("Text: " + value);
    };
    return MyText;
}());
var t = new MyText("My name Denis");
console.log(t.countTxt());
t.print("Denis");
var Car52 = /** @class */ (function () {
    function Car52(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car52.prototype.getCar = function () {
        return this.name;
    };
    Car52.prototype.getColor = function () {
        return this.color;
    };
    Car52.prototype.getPower = function () {
        return this.power;
    };
    return Car52;
}());
var camaro = new Car52("Camaro", "amarelo", 45);
console.log(camaro.getCar(), camaro.getColor(), camaro.getPower());
