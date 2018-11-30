/// <reference path="./Product.ts" />

module App {
    var p = new Product("Book 1", "Code book", 34.99);
    console.log(p)
    document.getElementById('app').innerHTML = `
        <div>
            <ul>
                <li>${p.name} - ${p.description} - ${p.value}</li>
            </ul>
        </div>
    `;
}