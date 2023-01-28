export class Address {
    constructor(
        cep = "",
        logradouro = "",
        bairro = "",
        localidade = "",
        uf = "",
        numero = "",
        complemento = "",
        id_user = "",
        padrao = false
    ) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
        this.numero = numero;
        this.complemento = complemento;
        this.id_user = id_user;
        this.padrao = padrao;
    }
}