const prompt = require('prompt-sync')()
const Tarefa = require('./class/Tarefa')
const TarefasConcluida = require('./class/TarefasConcluida')

const tarefas = []

tarefas.push(new Tarefa("Estudar POO", "Praticar encapsulamento e herança"))
tarefas.push(new TarefasConcluida("Fazer projeto", "Separar classes em arquivos"))
tarefas.push(new Tarefa("Descansar", "Assistir série favorita"))

function listarTarefas() {
  console.log(" Lista de Tarefas:")
  tarefas.forEach((tarefa, i) => {
    console.log(`${i + 1}. ${tarefa.exibir()}`)
  })
}

function concluirTarefa() {
  const numero = parseInt(prompt("Digite o número da tarefa a concluir: "))
  const index = numero - 1

  if (index < 0 || index >= tarefas.length) {
    console.log("Número inválido!")
    return
  }

  const tarefa = tarefas[index]

  if (tarefa instanceof TarefasConcluida) {
    console.log("Tarefa já está concluída.")
    return
  }

  tarefas[index] = new TarefasConcluida(tarefa.titulo, tarefa.descricao)
  console.log("Tarefa concluída!")
}

function adicionarTarefa() {
  const titulo = prompt("Digite o título da nova tarefa: ")
  const descricao = prompt("Digite a descrição da tarefa: ")
  tarefas.push(new Tarefa(titulo, descricao))
  console.log("Tarefa adicionada!")
}

function menu() {
  let opcao
  do {
    console.log(`
======== MENU ========
1. Listar tarefas
2. Concluir tarefa
3. Adicionar tarefa
4. Sair
=======================
`)
    opcao = prompt("Escolha uma opção: ")

    switch (opcao) {
      case '1':
        listarTarefas()
        break
      case '2':
        concluirTarefa()
        break
      case '3':
        adicionarTarefa()
        break
      case '4':
        console.log("Saindo...")
        break
      default:
        console.log(" Opção inválida!")
    }

  } while (opcao !== '4')
}

menu()
