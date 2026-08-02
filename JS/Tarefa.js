import { gerenciadorc } from "./GerenciadorCategoria.js"



export let proximoId = 1;

export class Tarefa {

    constructor(titulo, status = false, categorias = []) {
        this.id = proximoId++;
        this.titulo = titulo;
        this.status = status;
        this.categorias = categorias;
    }
  
    getId() {
        return this.id;
    }
  
    setId(novoId) {
        this.id = novoId;
    }
  
    getTitulo() {
        return this.titulo;
    }
  
    setTitulo(novoTitulo) {
        this.titulo = novoTitulo;
    }
  
    getStatus() {
        return this.status;
    }
  
    setStatus(novoStatus) {
        this.status = novoStatus;
    }
  
    getCategorias() {
        return this.categorias;
    }

    adicionarCategoriaTarefa(nome) {
        let novaCategoria = gerenciadorc.acharCategoria(nome);

        if (!novaCategoria){
            console.log("Categoria não encontrada");
        }else{
            this.categorias.push(novaCategoria);
            console.log("Categoria: ",novaCategoria," foi adicionada na tarefa com sucesso!");
        }
    }
  
    excluirCategoriaTarefa(categoria) {
        this.categorias = this.categorias.filter(c => c !== categoria);
    }
  
    alterarStatus() {
        this.status = !this.status;
    }
  }