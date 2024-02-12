

export class Carro {
    constructor(marca, modelo, valor, ano){
        this.marca = marca
        this.modelo = modelo
        this.valor = valor
        this.ano = ano
        this.vendido = false
    }

    carroVendido() {
        this.vendido = true
    }

}
