const Tarefa = require("../class/Tarefa")

class TarefaConcluida extends Tarefa {
    constructor(titulo,descricao) {
        super(titulo,descricao)
        this.concluida = false
    }

    exibir() {
        if (this.concluida) {
            this.descricao = "Muito bem! Tarefa concluida"
            return `${this.concluida ? '[✔️  ]' : '[ ]'} ${this.titulo} - ${this.descricao}`
        }
    }
}

module.exports = TarefaConcluida