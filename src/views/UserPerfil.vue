<script>
import userService from '@/service/userService';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            usuario: {},
            id: this.$route.params.id,
            email: this.$route.params.email,
            perfil: null
        };
    },
    methods: {
        get(id) {
            userService.get(id)
                .then(res => {
                    console.log(res);
                    this.usuario = res.data;
                }).catch(error => {
                    console.log(error);
                    alert("Erro ao pegar dados do usuário!");
                });
        },
        upload() {
            let dataForm = new FormData();
            for (let file of this.$refs.image.files) {
                dataForm.append("file", file);
            }
            dataForm.append("user", this.usuario._id);
            userService.upload(dataForm)
                .then(res => {
                    console.log(res);
                    this.perfil = this.updatePhoto(res.data.files[0].filename);
                }).catch(err => {
                    console.error(err);
                });
        },
        updatePhoto(foto) {
            let local = import.meta.env.VITE_APIURL;
            let folder = import.meta.env.VITE_UPLOADURL + "/users/";
            return (local + folder + foto);
        }
    },
    mounted() {
        this.get(this.id);
    },
    components: { RouterLink }
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
            <RouterLink to="/address" type="button" class="btn btn-danger">
                Enderecos
            </RouterLink>
        </div>

    </section>

    <section class="container">
        <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupPhoto" name="file" ref="image" multiple
                @change="upload()">
            <label class="input-group-text" for="inputGroupPhoto"></label>
        </div>
    </section>

    <section class="container">
        {{ perfil }}
        <img v-if="perfil != null" class="img-fluid" alt="perfil" :src="perfil" width="100%" />
    </section>
    {{ id }} {{ email }}
</template>

<style scoped>

</style>