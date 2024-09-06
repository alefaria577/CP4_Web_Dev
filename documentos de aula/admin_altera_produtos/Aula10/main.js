console.log(document);
console.log(document.head);
console.log(document.body);


let div = document.getElementById("app");
console.log(div);

let paragrafo = document.getElementById("paragrafo1");
console.log(paragrafo);

let paises = document.getElementsByClassName("paises");
console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);

let containers = document.getElementsByTagName("div");
console.log(containers[0]);
console.log(containers[1]);
console.log(containers[2]);

let container = document.querySelector("#container")
//Por id com #
console.log(container)

let paragrafo2 = document.querySelector(".texto")
// Por classe com .
console.log(paragrafo2)

// É possível selecionar a tag <p> seguindo a sintaxe de CSS:
let paragrafo3 = document.querySelector("#container p")
console.log(paragrafo3)

let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
// "Olá, Mundo!"
//Modificação do conteúdo do elemento
titulo.innerText = "Olá, Dev!"
console.log(titulo.innerText)
// "Olá, Dev!"
