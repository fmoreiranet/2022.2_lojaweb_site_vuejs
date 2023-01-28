export class Address {
    constructor(
        cep = "",
        logradouro = "",
        bairro = "",
        cidade = "",
        uf = "",
        numero = "",
        complemento = "",
        id_user = "",
    ) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.numero = numero;
        this.complemento = complemento;
        this.id_user = id_user;
    }
}