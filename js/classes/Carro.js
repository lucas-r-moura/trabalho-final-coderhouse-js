

export class Carro {
    constructor(marca, modelo, cor, valor, ano, quilometragem){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.valor = valor
        this.ano = ano
        this.quilometragem = quilometragem
        this.vendido = false
    }

    carroVendido() {
        this.vendido = true
    }

}
