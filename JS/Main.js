import { Tarefa } from "./Tarefa.js"
import { Categoria } from "./Categoria.js"
import { gerenciadorc } from "./GerenciadorCategoria.js"
import { gerenciadort } from "./GerenciadorTarefa.js"





//aqui é onde eu vou testar as parada



gerenciadort.criarTarefa("limpar");

gerenciadorc.criarCategoria("estudos");

gerenciadort.acharTarefa("limpar").adicionarCategoriaTarefa("estudo")

console.log(gerenciadort.acharTarefa("limpar"))

gerenciadorc.editarCategoria("estudos","Trabalho")

console.log(gerenciadorc.acharCategoria("Trabalho"))
