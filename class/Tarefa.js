class Tarefa {
    #titulo
    #descricao
    #concluida
    constructor(titulo,descricao) {
        this.#titulo = titulo
        this.#descricao = descricao
        this.#concluida = false
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

    get concluida() {
        return this.#concluida
    }

    set concluida(valor) {
        this.#concluida = valor
    }

    concluir() {
        this.concluida = true
    }

    exibir() {
        return `${this.concluida ? '[✔️]' : '[ ]'} ${this.titulo} - ${this.descricao}`
    }
}

module.exports = Tarefa