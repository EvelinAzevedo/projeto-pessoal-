class Tarefa {
    #titulo
    #descricao
    constructor(titulo,descricao) {
        this.#titulo = titulo
        this.#descricao = descricao
    }

    get titulo() {
        return this.#titulo
    }

    set titulo(valor){
        this.#titulo = valor
    }

    get descricao() {
        return this.#descricao
    }

    set descricao(valor) {
        this.#descricao = valor
    }

    concluir() {
        this.concluida = true
    }

    exibir() {
        return `[ ] ${this.titulo} - ${this.descricao}`
    }
}

module.exports = Tarefa