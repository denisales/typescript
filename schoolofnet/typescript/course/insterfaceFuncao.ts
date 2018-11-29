interface ITypeFunc{
    (a:number, b:number):boolean;
}

var add:ITypeFunc;

add = function (varA:number, varB:number):boolean{
    return true
}


interface IColor2{
    (codeColor:string, title?:string):{codeColor:string, title?:string};
}

var getColor2: IColor2;
getColor2 = function(codeColor:string, title?:string):{codeColor:string, title?:string}{
    if(title){
        return {codeColor, title}
    }
    return {codeColor}
}



interface IArrayTypes{
    [index:number]:string;
}

var a:IArrayTypes;
a = ["Teste"];
console.log(a);
