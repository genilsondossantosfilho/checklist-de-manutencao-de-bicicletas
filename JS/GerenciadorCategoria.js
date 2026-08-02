
import { Categoria } from "./Categoria.js";
import { gerenciadort } from "./GerenciadorTarefa.js";



class GerenciadorCategoria{

    categorias = [];

    constructor(categorias = []){
        this.categorias = categorias;
    }



    getCategorias(){
        return this.categorias;
    }

    criarCategoria(nome) {
        let novaCategoria = new Categoria(nome);
        this.categorias.push(novaCategoria); 
        console.log("Categoria criada:", novaCategoria);
    }
    
    acharCategoria(nome) {
        return this.categorias.find(c => c.nome.trim().toLowerCase() === nome.trim().toLowerCase()); //trim remove espaços e o outro é pra deixar tudo minusculo
    }
    
    editarCategoria(nomeCategoria,novoNome) {
        let novaCategoria = gerenciadorc.acharCategoria(nomeCategoria);

        if (!novaCategoria){
            console.log("Categoria não encontrada");
        }else{
            novaCategoria.setNome(novoNome);
            console.log("O nome da categoria foi alterado com sucesso!");
        }
    }

    excluirCategoria(nome){
        let excluida = gerenciadorc.acharCategoria(nome);

        if (!excluida){
            console.log("Categoria não encontrada");
            return;
        }
        this.categorias = this.categorias.filter(c => c.getId() !== excluida.getId())

        console.log(" A categoria ", excluida.getNome()," foi excluida com sucesso!");

        gerenciadort.getTarefas().forEach(tarefa => {tarefa.excluirCategoriaTarefa(excluida)});
    }

    exibirCategorias(){
        let lista = "Categorias: "
        gerenciadorc.getCategorias().forEach(categoria => {lista += categoria.getNome() + ", "});

        return console.log(lista)
    }
}


export const gerenciadorc = new GerenciadorCategoria();