function people(value) {
    console.log(value);
}
people({ name: "Denis", age: 23 });
function people2(name, age) {
    return { name: name, age: age };
}
console.log(people2("Denis2", 23));
function getColor(code, title) {
    if (title) {
        return { title: title, codeColor: code };
    }
    return { codeColor: code };
}
console.log(getColor('#25dfrk', 'Cor 1'));
