// comentarios de linha

/*

comentários de multiplas linhas

*/

var nome = "Edir"; // string
var idade = 12; // number ou integer
var peso = 23.5; // number ou float
var andando = false; // boolean

nome = "Ana";
nome = 123;

// JS == EcmaScript == ES22
// ES > 2015 == ES6 == ES15

const pais = "brasil";
pais = "paraguai";

let nome = "Julia";

// estrutura de dados
let alunos = ["Ana", "paulo", "Pedro", "Julia", 123]; // array

alunos[3]; // julia
alunos[1] = "Paulo";

alunos.push("Mario"); // add aluno

alunos.shift(); // remove o primeiro aluno

let bolsa1 = [12.3, 33.5, 44.3, "34.7"];

let bolsa2 =  Float32Array(12.4, 12.5, 65.7);


// logica boleana 

let idade = 40;

/*
    >  maior
    <  menor
    == igual
    >= maior ou igual
    <= menor ou igual
    != diferente
    && E logico
    || OU logico
    === exatamente igual

    0 == false

*/

let nome = undefined;

if ( !false ) {
    // verdade
} else {
    // false
}


let cor = (idade > 18)? "Azul" : "Vermelho";


let soma = (2 + 4) * 6 / 2;

// JSON

let cliente = {
    nome: "edir",
    idade: 12,
    peso: 23.5,
    produtos: ["Tenis", "Meias", "Bone"],
    endereco: {
        estado: "PR",
        cidade: "Curitiba",
        CEP: "12345-123"
    }
};


