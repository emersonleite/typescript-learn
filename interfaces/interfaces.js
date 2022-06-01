"use strict";
// Definindo a interface
// idade é opcional, pois tem '?'
// [prop: string] : any é um atributo dinãmico
// saudar. que é uma função, com '?' também fica opcional
function saudarComOla(pessoa) {
    console.log("Ola, " + pessoa.nome);
}
const pessoa = {
    nome: "João",
    idade: 27
};
saudarComOla(pessoa);
//# sourceMappingURL=interfaces.js.map