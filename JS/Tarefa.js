
let tarefas = [];

export class Tarefa {

    constructor(id, titulo, status = false, categorias = []) {
        this.id = proximoId++;
        this.id = id;
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
  
    adicionarCategoriaTarefa(categoria) {
        this.categorias.push(categoria);
    }
  
    excluirCategoriaTarefa(categoria) {
        this.categorias = this.categorias.filter(c => c !== categoria);
    }
  
    alterarStatus() {
        this.status = !this.status;
    }
  }