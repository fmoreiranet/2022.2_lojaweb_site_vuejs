<script>
import userService from '@/service/userService';
import addressService from '@/service/addressService';

export default {
    data() {
        return {
            usuario: {},
            enderecos: [],
            endereco: {},
            id: this.$route.params.id,
        }
    },
    methods: {
        getUser(idUser) {
            userService.get(idUser)
                .then(res => {
                    console.log(res);
                    this.usuario = res.data
                }).catch(error => {
                    console.log(error);
                    alert("Erro ao pegar dados do usuário!");
                })
        },
        getUserAddress(idUser) {
            addressService.get(idUser)
                .then(res => {
                    console.log(res);
                    this.enderecos = res.data
                }).catch(error => {
                    console.log(error);
                    alert("Erro ao pegar dados do endereco!");
                })
        },
        addAddress() {
            addressService.add(this.endereco)
                .then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                    alert("Erro ao pegar dados do endereco!");
                })
        },
    },
    mounted() {
        this.getUserAddress(this.id);
    },
}
</script>

<template>
    <section class="container bg-light form-add">
        <h2>Enderecos do Usuario</h2>
        <div class="form-group">
            <label for="">Cep</label>
            <input type="text" name="cep" class="form-control" placeholder="" aria-describedby="helpcep"
                v-model="endereco.cep" />
            <small id="helpcep" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">Logradouro</label>
            <input type="text" name="logradouro" class="form-control" placeholder="" aria-describedby="helplogradouro"
                v-model="endereco.logradouro" />
            <small id="helplogradouro" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Bairro</label>
            <input type="text" name="bairro" class=" form-control" placeholder="" aria-describedby="helpPass"
                v-model="endereco.bairro" />
            <small id="helpPass" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Cidade</label>
            <input type="text" name="cidade" class="form-control" placeholder="" aria-describedby="helpDate"
                v-model="endereco.cidade" />
            <small id="helpDate" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">UF</label>
            <input type="text" name="uf" class="form-control" placeholder="" aria-describedby="helpuf"
                v-model="endereco.uf" />
            <small id="helpuf" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Numero</label>
            <input type="number" name="numero" class="form-control" placeholder="" aria-describedby="helpnumero"
                v-model="endereco.numero" />
            <small id="helpnumero" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Complemento</label>
            <input type="text" name="complemento" class="form-control" placeholder="" aria-describedby="helpcomplemento"
                v-model="endereco.complemento" />
            <small id="helpcomplemento" class="text-muted"></small>
        </div>

        <div class="mb-3">
            <button type="button" class="btn btn-danger">
                Sair
            </button>
        </div>
    </section>

    <section class="container">
        <div class="card" v-for="(endereco, index) in enderecos" :key="index">
            <p>{{ endereco.cep }}</p>
            <p>{{ endereco.logradouro }}</p>
            <p>{{ endereco.bairro }}</p>
            <p>{{ endereco.cidade }}</p>
            <p>{{ endereco.uf }}</p>
            <p>{{ endereco.numero }}</p>
            <p>{{ endereco.complemento }}</p>
        </div>
    </section>
</template>

<style scoped>

</style>