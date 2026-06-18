// objfuncao.js

const calculadora = {
    numero1: 20
    numero2:10,
    somar() {
      return this.numero1+this.numero2
    },
  
    subtrair() {
      return this.numero1-this.numero2
    },
  
    multiplicar() {
      return this.numero1 * this.numero2
    },
  
    dividir() {
      if this numero1 === this numero2 {
        throw new Error("Erro: divisão por zero")
        return "Erro: divisão por zero";
      }
      return this.numero1 / this.numero2 ;
    }
  };
  
  module.exports = calculadora; 
