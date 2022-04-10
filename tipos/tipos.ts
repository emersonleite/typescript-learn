// ==> ==> ==> ==> STRING <== <== <== <==
let nome = "Emerson"
console.log(nome)

let sobrenome : string = "Leite"
sobrenome = "Batista"
// Em typescript os tipos são inferidos a partir da inicialização, caso não seja determinado um tipo
// nome = 28 //erro


// ==> ==> ==> ==> NUMBER <== <== <== <==
let idade : number = 39
//idade = 'Emerson' //erro
idade = 27.5
console.log(idade)


// ==> ==> ==> ==> BOOLEAN <== <== <== <==
let possuiHobbies = true
//possuiHobbies = 1 //erro
console.log(possuiHobbies)


// ==> ==> ==> Tipos explícitos <== <== <== <==
// aqui se atribui o valor any automaticamente pois a variável foi inicializada sem valor definido para inferência ou sem tipo definido explicitamente
let minhaIdade
minhaIdade = 39
minhaIdade = "idade é 39"
console.log(typeof minhaIdade)


// ==> ==> ==> ==> ARRAY <== <== <== <==
let hobbies: any[] = ["Cozinhar", "Esportes", "Séries"]
console.log(typeof hobbies)
hobbies = [100]
hobbies = ["Emerson", "Mariana"]

let numbersList: number[]
// numbersList = ["Emerson", "Marta"] // erro
numbersList = [10, 20, 30, 40]


// ==> ==> ==> ==> TUPLAS <== <== <== <==
let endereco: [string, number, string] = ["Av Brasil", 99, ""]
console.log(endereco)
 

// ==> ==> ==> ==> ENUMS <== <== <== <==
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 2, // 2
  Laranja,
  Amarelo
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja)


// ==> ==> ==> ==> ANY <== <== <== <==
let carro: any = "BMW"
carro = {
  nome: "BMW",
  ano: "2011"
}
console.log(carro)


// ==> ==> ==> ==> FUNÇÕES <== <== <== <==
// Função que retorna string
nome = "Mariane"
function retornaNome(): string {
  return nome
}
console.log(retornaNome())

// Função que não tem retorno - void
function digaOi(): void {
  console.log("oi")
}
digaOi()

// Função com tipos nos parâmetros
function multiplicar(a: number, b: number): string {
  return String(a * b)
}

function multiplicar2(a: number, b: number): number {
  return a * b
}
console.log(multiplicar(5.45, 2))
console.log(multiplicar2(5.25, 2))


// ==> ==> ==> FUNÇÃO <== <== <== <==
let calculo: (numA: number, numB: number) => number
calculo = multiplicar2
console.log(calculo(56, 12))
// calculo = 1
// calculo = multiplicar //erro 

// ==> ==> ==> ==> OBJETO <== <== <== <==
let usuario: { nome: string, idade: number } = {
  nome: "Emerson",
  idade: 39
}
// usuario = {} // erro

console.log(usuario)

// usuario = {
//   name: "Maria",
//   age: "25"
// } // erro

usuario = { nome: "Mariana", idade: 16 }
console.log(usuario)

// DESAFIO :)
let funcionario: {
  supervisores: string[],
  baterPonto: (hora: number) => string
}

funcionario = {
  supervisores: ["Emerson", "Joaquina", "Francisca"],
  baterPonto(hora: number): string {
    return hora <= 8 ? "Ponto normal" : "Fora do horário"
  }
}

console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))
console.log(funcionario.supervisores)


// ==> ==> ==> ==> ALIAS <== <== <== <== 
// -> Tipos personalizados

type Funcionario = {
  supervisor: [string],
  baterPonto: (hour: number, text: string) => string
}

let funcionarioEmerson: Funcionario = {
  supervisor: ["Marta"],
  baterPonto: (hora: number, texto: string) => `${texto} ${hora} horas`
}

console.log(funcionarioEmerson.baterPonto(10, "Agora é"))


// ==> ==> ==> ==> UNION TYPES <== <== <== <== 
// -> União de tipos: mais de um tipo definido
let nota: number | string = 10
nota = "10"

// nota = ["10"] // erro

console.log(nota)


// ==> ==> ==> ==> NEVER <== <== <== <==
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: "Sabão",
  preco: 8, //-1, // erro
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome")
    }
    if (this.preco <= 0) {
      falha("Preço inválido")
    }
  },
}

produto.validarProduto()


// ==> ==> ==> ==> NULL <== <== <== <==

let altura: number | null = 12
altura = null
// altura = "12" // erro

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: "Emerson",
  tel1: "4198545214",
  tel2: null
}

console.log(contato1)

// const contato2: Contato = {
//   nome: "Emerson",
//   tel1: "4198545214",
//   tel2: ["4198541274"] // erro
// }

// Quando se atribui o valor null a uma variável ela vai assumir o tipo any
let temContato = null // any
temContato = 10
temContato = ["10"]


// DESAFIO :)
// Definição dos tipos
type tipoContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

type tipoCorrentista = {
  nome: string,
  contaBancaria: tipoContaBancaria,
  contatos: string[] | [string, string]
}

// Definição dos elementos
let contaBancaria: tipoContaBancaria = {
  saldo: 3456,
  depositar(saldo): void {
    this.saldo += saldo
  }
}

let correntista: tipoCorrentista
correntista = {
  nome: "Emerson",
  contaBancaria: contaBancaria,
  contatos: ["41987456212", "4185427122"]
}

// Mostrar no console
correntista.contaBancaria.depositar(3000)
console.log(correntista)