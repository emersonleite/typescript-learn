// Definindo a interface
// idade é opcional, pois tem '?'
// [prop: string] : any é um atributo dinãmico
// saudar. que é uma função, com '?' também fica opcional

type PessoaType = {
  nome: string,
  idade: number,
  sobrenome?: string,
  [prop: string] : any,
  saudar?(sobrenome: string) : void
}

const pessoa: pessoaInterface = {
  nome: "João",
  idade: 27,
  sobrenome: "Moura"
}

const pessoa2 : pessoaInterface = {
  nome: 'Emerson',
  idade: 39,
  sobrenome: 'Leite'
}

interface pessoaInterface {
  nome: string
  idade?: number
  sobrenome: string
  [prop: string] : any
  saudar?(sobrenome: string) : void
}

function saudarComOla(pessoa: pessoaInterface) {
  console.log("Ola, " + pessoa.nome)
}

function mostrarSobrenome(pessoa : pessoaInterface){
  console.log(pessoa['sobrenome'])
}


mostrarSobrenome(pessoa2)
saudarComOla(pessoa)