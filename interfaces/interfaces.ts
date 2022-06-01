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
interface pessoaInterface {
  nome: string
  idade?: number
  [prop: string] : any
  saudar?(sobrenome: string) : void
}

function saudarComOla(pessoa: pessoaInterface) {
  console.log("Ola, " + pessoa.nome)
}

const pessoa: PessoaType = {
  nome: "João",
  idade: 27
}

saudarComOla(pessoa)