import { Tarefa } from "./Tarefa.js";


class GerenciadorTarefa{

    tarefas = [];

    constructor(tarefas = []){
        this.tarefas = tarefas;
    }

    
    getTarefas(){
        return this.tarefas;
    }


    criarTarefa(titulo) {
        let novaTarefa = new Tarefa(titulo);
        this.tarefas.push(novaTarefa); 
        console.log("Tarefa criada:", novaTarefa);
    }

    acharTarefa(titulo) {
        const tarefaEncontrada = this.tarefas.find(c => c.titulo.toLowerCase() === titulo.toLowerCase());
          
            if (!tarefaEncontrada) {
              return "tarefa não encontrada";
            }
          
            return tarefaEncontrada;
    }

    excluirCategoriaTarefa(categoria){

    }

    exibirCategoriasTarefa(){

    }

    exibirTodasTarefas(){

    }

    exibirTarefasPendentes(){

    }

    exibirTarefasConcluidasCategoria(){

    }

    exibirTodasTarefasConcluidas(){

    }

    exibirTodasTarefasPendentes(){

    }

}

export const gerenciadort = new GerenciadorTarefa();
