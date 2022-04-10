let canal: string = "Gaveta"
let inscritos: number = 96542
// canal = inscritos // erro
console.log(`Canal = ${canal}`)

// let nome: string = "Emerson" // erro

// Criando outro contexto - NOTA minha
{
  let nome: string = "Emerson Leite"
  console.log(nome)
}

function soma(a: any, b: any) {
  return a + b
}

// erro com "strictNullChecks": true, pois previne retorno de null nesse caso
// function saudar(ehmanha: boolean) {
//   let saudacao: string
//   return ehmanha ? saudacao = "Bom dia" : saudacao  
// }


// erro com "noUnusedParameters": true , pois há parametros não usados
// function saudar(ehmanha: boolean, nome: string) {
//   let saudacao: string
//   return ehmanha ? saudacao = "Bom dia" : saudacao = "Ola, tenha ótimo dia"
// }

// erro com "noUnusedLocals": true, que verifica variaveis locais não definidas
// function saudar(ehmanha: boolean, nome: string) {
//   let saudacao: string
//   let a = 1
//   if (ehmanha) {
//     saudacao = "Bom dia" + nome
//   }
//   saudacao = "Ola, tenha ótimo dia"
//   return saudacao
// }

function saudar(ehmanha: boolean, nome: string) {
  let saudacao: string
  let a = 1
  if (ehmanha) {
    saudacao = "Bom dia" + nome + a
  }
  saudacao = "Ola, tenha ótimo dia"
  return saudacao
}


