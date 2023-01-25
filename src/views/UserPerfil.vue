<script>
import userService from '@/service/userService';

export default {
    data() {
        return {
            usuario: {},
            id: this.$route.params.id
        }
    },
    methods: {
        get(id) {
            userService.get(id)
                .then(res => {
                    console.log(res);
                    this.usuario = res.data
                }).catch(error => {
                    console.log(error);
                    alert("Erro ao pegar dados do usuário!");
                })
        },
    },
    mounted() {
        this.get(this.id);
    }
}
</script>

<template>
    <section class="container bg-light form-add">
        <h2>Dados do Usuario</h2>
        <div class="form-group">
            <label for="">Nome</label>
            <input type="text" name="nome" class="form-control" placeholder="" aria-describedby="helpName"
                v-model="usuario.nome" />
            <small id="helpName" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">E-mail</label>
            <input type="email" name="email" class="form-control" placeholder="" aria-describedby="helpEmail"
                v-model="usuario.email" />
            <small id="helpEmail" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Senha</label>
            <input type="password" name="senha" class=" form-control" placeholder="" aria-describedby="helpPass"
                v-model="usuario.senha" />
            <small id="helpPass" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Data Nasc.</label>
            <input type="date" name="data_nasc" class="form-control" placeholder="" aria-describedby="helpDate"
                v-model="usuario.data_nasc" />
            <small id="helpDate" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">Tel</label>
            <input type="tel" name="tel" class="form-control" placeholder="" aria-describedby="helpTel"
                v-model="usuario.telefone" />
            <small id="helpTel" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">CPF</label>
            <input type="number" name="cpf" class="form-control" placeholder="" aria-describedby="helpCPF"
                max="99999999999" min="00000000000" v-model="usuario.cpf" />
            <small id="helpCPF" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">Ativo</label>
            <input type="checkbox" name="ativo" class="" placeholder="" aria-describedby="helpAtivo"
                v-model="usuario.ativo" checked={{usuario.ativo}} />
            <small id="helpAtivo" class="text-muted"></small>
        </div>

        <div class="mb-3">
            <button type="button" class="btn btn-danger">
                Sair
            </button>
        </div>

    </section>
</template>

<style scoped>

</style>