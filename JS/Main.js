import { Tarefa } from "./Tarefa.js"
import { Categoria } from "./Categoria.js"
import { gerenciadorc } from "./GerenciadorCategoria.js"
import { gerenciadort } from "./GerenciadorTarefa.js"





//aqui é onde eu vou testar as parada



gerenciadort.criarTarefa("limpar");

gerenciadorc.criarCategoria("estudos");

gerenciadort.acharTarefa("limpar").adicionarCategoriaTarefa("estudos")

console.log("lista de Categorias: ", gerenciadorc.getCategorias())

console.log("Tudo certo")

console.log(gerenciadorc.acharCategoria("estudos"))

gerenciadorc.criarCategoria("matematica");
gerenciadorc.criarCategoria("ingles");
gerenciadorc.criarCategoria("fisica");

console.log(gerenciadort.acharTarefa("limpar"))

gerenciadort.exibirTarefasCategoria("estudos")
