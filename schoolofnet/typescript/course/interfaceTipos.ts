interface IPeople{
    name:string;
    age:number;
}


function people (value:IPeople):void{
    console.log(value);
}

people({name:"Denis", age:23});


function people2(name:string, age:number):IPeople{
    return {name, age};
}
console.log(people2("Denis2", 23));



interface IColor{
    title?:string; //opcional
    codeColor:string;
}

function getColor(code:string, title?:string):IColor{
    if(title){
        return {title, codeColor:code};
    }
    return {codeColor:code};
}


console.log(getColor('#25dfrk', 'Cor 1'));