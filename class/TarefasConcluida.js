const Tarefa = require("../class/Tarefa")

class TarefaConcluida extends Tarefa {
    constructor(titulo,descricao) {
        super(titulo,descricao)
    }

    exibir() {
        if (this.concluida) {
            return `${this.titulo} - Muito bem! Tarefa concluida.`
        }
    }
}

module.exports = TarefaConcluida