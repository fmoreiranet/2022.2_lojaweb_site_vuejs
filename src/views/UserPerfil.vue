<script>
import userService from '@/service/userService';
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink },
    data() {
        return {
            usuario: {},
            id: this.$route.params.id,
            email: this.$route.params.email,
            perfil: this.updatePhoto() 
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
                    console.log(res.data.files);
                    this.perfil = this.updatePhoto(res.data.files);
                }).catch(err => {
                    console.error(err.message);
                });
        },
        updatePhoto(files) {       
            try {                
                let fotos = files;
                return fotos && fotos.length == 0 ? "/perfil.jpeg"
                : fotos.length == 1 ? fotos[0]
                : fotos;
            } catch (error) {
                console.error("Error: ", error.message)
                return "/perfil.jpeg";
            }  
        }
    },
    mounted() {
        this.get(this.id);
    },
   
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
            <RouterLink :to="{ path: '/address/' + usuario._id }" type="button" class="btn btn-danger">
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
        <img class="img-fluid" alt="perfil" :src='perfil' width="100%" />
    </section>
</template>

<style scoped>

</style>