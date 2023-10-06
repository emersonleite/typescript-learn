"use strict";
// Definindo a interface
// idade é opcional, pois tem '?'
// [prop: string] : any é um atributo dinãmico
// saudar. que é uma função, com '?' também fica opcional
const pessoa = {
    nome: "João",
    idade: 27,
    sobrenome: "Moura"
};
const pessoa2 = {
    nome: 'Emerson',
    idade: 39,
    sobrenome: 'Leite'
};
function saudarComOla(pessoa) {
    console.log("Ola, " + pessoa.nome);
}
function mostrarSobrenome(pessoa) {
    console.log(pessoa['sobrenome']);
}
mostrarSobrenome(pessoa2);
saudarComOla(pessoa);
//# sourceMappingURL=interfaces.js.map