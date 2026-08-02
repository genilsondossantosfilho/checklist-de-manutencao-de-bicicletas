export let proximoId = 1;

export class Categoria {

    constructor(nome) {
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

}
