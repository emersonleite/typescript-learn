class errorMessage {
  // public por padrão
  statusDoSistema: string = "Sistema ativo"

  protected fullMessage: string = ""

  constructor(private typeError: string = "Erro 01", private messageError: string = "O erro é") { }

  protected getErrorPrivate(): string {
    return `${this.messageError} ${this.typeError}`
  }

  private getThis(): {} {
    return this
  }

  public showThis() {
    console.log(this.getThis())
  }

  // public por padrão
  showErrorPublic(message: string): void {
    this.fullMessage = message + ":" + this.getErrorPrivate() + " - " + this.statusDoSistema
    console.log(this.fullMessage)
  }
}

// ==> ==> ==> HERANÇA
class errorSystemMessage extends errorMessage {
  private _fullMessageSystem: string = ""

  constructor(typeError: string) {
    // Invocando o construtor, caso o construtor da classe herdada seja diferente
    super(typeError, "Esse erro é 555, ou seja, de sistema.")
  }

  get fullMessageSystem(): string {
    return this._fullMessageSystem
  }

  set fullMessageSystem(valor: string) {
    this._fullMessageSystem = valor
  }

  // sobrescrevendo um método publico. Métodos utilizados herdados não podem ser private. Devem ser protected
  showErrorPublic(message: string) {
    this._fullMessageSystem = message + ":" + this.getErrorPrivate() + " - " + "Esse erro é de sistema. Cuidado!"
    console.log(this._fullMessageSystem)
  }

  // Método da classe extendida
  showSystemMessagePublic() {
    console.log("Essa mensagem de erro é pública.")
  }
}



let error = new errorMessage("002", "O erro mostrado é").showErrorPublic("A mensagem provida é")

let errorSystem = new errorSystemMessage("003")
errorSystem.showErrorPublic("A mensagem do erro é")
errorSystem.showSystemMessagePublic()

// Acessando com getter
console.log(errorSystem.fullMessageSystem)

// Acessando com setter
errorSystem.fullMessageSystem = "A mensagem foi alterada"
console.log(errorSystem.fullMessageSystem)


// ==> ==> ==> MEMBROS ESTÁTICOS

class Mathemathica {
  static PI: number = 3.1415

  static areaCirculo(raio: number) {
    return Mathemathica.PI * raio * raio
  }

  area() {
    return 2
  }
}

console.log(Mathemathica.areaCirculo(1))
let m = new Mathemathica()
console.log(m.area())


// ==> ==> ==> CLASSE ABSTRATA - Exemplo de polimorfismo
abstract class CalculoDeConta {
  protected resultado: number = 0

  // Método não tem implementação. É implementado na classe herdada
  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class SomaDeConta extends CalculoDeConta {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a)
  }
}

class MultDeConta extends CalculoDeConta {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

let conta1 = new SomaDeConta()
conta1.executar(2, 4, 5, 7)
console.log(conta1.getResultado())

conta1 = new MultDeConta()
conta1.executar(2, 4, 5, 7)
console.log(conta1.getResultado())

// ==> ==> ==> Atributos somente leitura

class Aviao2 {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const modeloAviao = new Aviao2("TU-114", "PT-ABC")
// turboHelice.modelo = "DC-9665" // ERRO
// turboHelice.prefixo = "PT-95" // ERRO

console.log(modeloAviao)
