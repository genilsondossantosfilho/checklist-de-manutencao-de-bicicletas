
let categorias = [];
let proximoId = 0;


export class Categoria {

    constructor(id, nome) {
        this.id = proximoId ++;
        this.nome = nome;
    }
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }
    setNome(novoNome){
        this.nome = novoNome;
    }


    editarCategoria(categoria){

    }
    excluirCategoria(categoria){

    }
    exibirCategorias(){

    }

}
