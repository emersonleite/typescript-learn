"use strict";
// ==> ==> ==> ==> STRING <== <== <== <==
let nome = "Emerson";
console.log(nome);
let sobrenome = "Leite";
sobrenome = "Batista";
// Em typescript os tipos são inferidos a partir da inicialização, caso não seja determinado um tipo
// nome = 28 //erro
// ==> ==> ==> ==> NUMBER <== <== <== <==
let idade = 39;
//idade = 'Emerson' //erro
idade = 27.5;
console.log(idade);
// ==> ==> ==> ==> BOOLEAN <== <== <== <==
let possuiHobbies = true;
//possuiHobbies = 1 //erro
console.log(possuiHobbies);
// ==> ==> ==> Tipos explícitos <== <== <== <==
// aqui se atribui o valor any automaticamente pois a variável foi inicializada sem valor definido para inferência ou sem tipo definido explicitamente
let minhaIdade;
minhaIdade = 39;
minhaIdade = "idade é 39";
console.log(typeof minhaIdade);
// ==> ==> ==> ==> ARRAY <== <== <== <==
let hobbies = ["Cozinhar", "Esportes", "Séries"];
console.log(typeof hobbies);
hobbies = [100];
hobbies = ["Emerson", "Mariana"];
let numbersList;
// numbersList = ["Emerson", "Marta"] // erro
numbersList = [10, 20, 30, 40];
// ==> ==> ==> ==> TUPLAS <== <== <== <==
let endereco = ["Av Brasil", 99, ""];
console.log(endereco);
// ==> ==> ==> ==> ENUMS <== <== <== <==
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
// ==> ==> ==> ==> ANY <== <== <== <==
let carro = "BMW";
carro = {
    nome: "BMW",
    ano: "2011"
};
console.log(carro);
// ==> ==> ==> ==> FUNÇÕES <== <== <== <==
// Função que retorna string
nome = "Mariane";
function retornaNome() {
    return nome;
}
console.log(retornaNome());
// Função que não tem retorno - void
function digaOi() {
    console.log("oi");
}
digaOi();
// Função com tipos nos parâmetros
function multiplicar(a, b) {
    return String(a * b);
}
function multiplicar2(a, b) {
    return a * b;
}
console.log(multiplicar(5.45, 2));
console.log(multiplicar2(5.25, 2));
// ==> ==> ==> FUNÇÃO <== <== <== <==
let calculo;
calculo = multiplicar2;
console.log(calculo(56, 12));
// calculo = 1
// calculo = multiplicar //erro 
// ==> ==> ==> ==> OBJETO <== <== <== <==
let usuario = {
    nome: "Emerson",
    idade: 39
};
// usuario = {} // erro
console.log(usuario);
// usuario = {
//   name: "Maria",
//   age: "25"
// } // erro
usuario = { nome: "Mariana", idade: 16 };
console.log(usuario);
// DESAFIO :)
let funcionario;
funcionario = {
    supervisores: ["Emerson", "Joaquina", "Francisca"],
    baterPonto(hora) {
        return hora <= 8 ? "Ponto normal" : "Fora do horário";
    }
};
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));
console.log(funcionario.supervisores);
let funcionarioEmerson = {
    supervisor: ["Marta"],
    baterPonto: (hora, texto) => `${texto} ${hora} horas`
};
console.log(funcionarioEmerson.baterPonto(10, "Agora é"));
// ==> ==> ==> ==> UNION TYPES <== <== <== <== 
// -> União de tipos: mais de um tipo definido
let nota = 10;
nota = "10";
// nota = ["10"] // erro
console.log(nota);
// ==> ==> ==> ==> NEVER <== <== <== <==
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    },
};
produto.validarProduto();
// ==> ==> ==> ==> NULL <== <== <== <==
let altura = 12;
altura = null;
const contato1 = {
    nome: "Emerson",
    tel1: "4198545214",
    tel2: null
};
console.log(contato1);
// const contato2: Contato = {
//   nome: "Emerson",
//   tel1: "4198545214",
//   tel2: ["4198541274"] // erro
// }
// Quando se atribui o valor null a uma variável ela vai assumir o tipo any
let temContato = null; // any
temContato = 10;
temContato = ["10"];
// Definição dos elementos
let contaBancaria = {
    saldo: 3456,
    depositar(saldo) {
        this.saldo += saldo;
    }
};
let correntista;
correntista = {
    nome: "Emerson",
    contaBancaria: contaBancaria,
    contatos: ["41987456212", "4185427122"]
};
// Mostrar no console
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map