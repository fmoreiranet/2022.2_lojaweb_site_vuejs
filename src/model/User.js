import moment from "moment/moment";
export class User {
    constructor(
        id_usuario = null,
        nome = "",
        foto = "",
        cpf = "",
        email = "",
        senha = "",
        telefone = "",
        data_nasc = new Date(),
        perfil = 1,
        ativo = true
    ) {
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.foto = foto;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.data_nasc = moment(data_nasc, "YYYY-MM-DD");
        this.perfil = perfil;
        this.ativo = ativo;
    }

}
