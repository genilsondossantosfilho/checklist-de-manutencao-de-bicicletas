import { gerenciadorc } from "./GerenciadorCategoria.js";
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

    excluirTarefa(nome){
        let excluida = gerenciadort.acharTarefa(nome)

        if (!tarefaEncontrada || "tarefa não encontrada") {
            return "tarefa não encontrada";
        }

        this.tarefas = this.tarefas.filter(c => c.getId() !== excluida.getId())
        console.log(" A tarefa ", excluida.getNome()," foi excluida com sucesso!");
    }

    exibirTarefasCategoria(nome){
        const categoria = gerenciadorc.acharCategoria(nome);
    
        if (!categoria){
            console.log("Categoria não encontrada");
            return;
        }
    
        let lista = "Tarefas:\n";
    
        gerenciadort.getTarefas().forEach(tarefa => {
            const temCategoria = tarefa.getCategorias().some(
                c => c.getId() === categoria.getId()
            );
    
            if (temCategoria){
                lista += "- " + tarefa.getTitulo() + "\n";
            }
        });
    
        console.log(lista);
    }

}

export const gerenciadort = new GerenciadorTarefa();
