"use strict";
class errorMessage {
    constructor(typeError = "Erro 01", messageError = "O erro é") {
        this.typeError = typeError;
        this.messageError = messageError;
        // public por padrão
        this.statusDoSistema = "Sistema ativo";
        this.fullMessage = "";
    }
    getErrorPrivate() {
        return `${this.messageError} ${this.typeError}`;
    }
    getThis() {
        return this;
    }
    showThis() {
        console.log(this.getThis());
    }
    // public por padrão
    showErrorPublic(message) {
        this.fullMessage = message + ":" + this.getErrorPrivate() + " - " + this.statusDoSistema;
        console.log(this.fullMessage);
    }
}
// ==> ==> ==> HERANÇA
class errorSystemMessage extends errorMessage {
    constructor(typeError) {
        // Invocando o construtor, caso o construtor da classe herdada seja diferente
        super(typeError, "Esse erro é 555, ou seja, de sistema.");
        this._fullMessageSystem = "";
    }
    get fullMessageSystem() {
        return this._fullMessageSystem;
    }
    set fullMessageSystem(valor) {
        this._fullMessageSystem = valor;
    }
    // sobrescrevendo um método publico. Métodos utilizados herdados não podem ser private. Devem ser protected
    showErrorPublic(message) {
        this._fullMessageSystem = message + ":" + this.getErrorPrivate() + " - " + "Esse erro é de sistema. Cuidado!";
        console.log(this._fullMessageSystem);
    }
    // Método da classe extendida
    showSystemMessagePublic() {
        console.log("Essa mensagem de erro é pública.");
    }
}
let error = new errorMessage("002", "O erro mostrado é").showErrorPublic("A mensagem provida é");
let errorSystem = new errorSystemMessage("003");
errorSystem.showErrorPublic("A mensagem do erro é");
errorSystem.showSystemMessagePublic();
// Acessando com getter
console.log(errorSystem.fullMessageSystem);
// Acessando com setter
errorSystem.fullMessageSystem = "A mensagem foi alterada";
console.log(errorSystem.fullMessageSystem);
// ==> ==> ==> MEMBROS ESTÁTICOS
class Mathemathica {
    static areaCirculo(raio) {
        return Mathemathica.PI * raio * raio;
    }
    area() {
        return 2;
    }
}
Mathemathica.PI = 3.1415;
console.log(Mathemathica.areaCirculo(1));
let m = new Mathemathica();
console.log(m.area());
// ==> ==> ==> CLASSE ABSTRATA - Exemplo de polimorfismo
class CalculoDeConta {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class SomaDeConta extends CalculoDeConta {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class MultDeConta extends CalculoDeConta {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let conta1 = new SomaDeConta();
conta1.executar(2, 4, 5, 7);
console.log(conta1.getResultado());
conta1 = new MultDeConta();
conta1.executar(2, 4, 5, 7);
console.log(conta1.getResultado());
// ==> ==> ==> Atributos somente leitura
class Aviao2 {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const modeloAviao = new Aviao2("TU-114", "PT-ABC");
// turboHelice.modelo = "DC-9665" // ERRO
// turboHelice.prefixo = "PT-95" // ERRO
console.log(modeloAviao);
//# sourceMappingURL=main.js.map