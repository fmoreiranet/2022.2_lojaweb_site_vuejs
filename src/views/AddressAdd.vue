<script>
import userService from '@/service/userService';
import addressService from '@/service/addressService';
import { User } from '@/model/User';
import { Address } from '@/model/Address';

export default {
    data() {
        return {
            usuario: new User,
            enderecos: [],
            endereco: new Address,
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
            addressService.list(idUser)
                .then(res => {
                    console.log(res);
                    this.enderecos = res.data
                }).catch(error => {
                    console.log(error);
                    //alert("Erro ao pegar dados do endereço!");
                })
        },
        addAddress() {
            this.endereco.id_user = this.id;
            addressService.add(this.endereco)
                .then(res => {
                    console.log(res);
                    alert("Cadastrado!");
                }).catch(error => {
                    console.log(error);
                    alert("Erro ao gravar o endereço!");
                })
        },
        async buscaCEP(cep) {
            try {
                this.endereco = await addressService.getAddressCEP(cep);
            } catch (error) {
                alert(error.message);
            }
        }
    },
    mounted() {
        this.getUserAddress(this.id);
    },
}
</script>

<template>
    <section class="container bg-light form-add">
        <h2>Endereços do Usuário</h2>
        <div class="form-group">
            <label for="">Cep</label>
            <input type="text" name="cep" class="form-control" placeholder="" aria-describedby="helpcep"
                v-model="endereco.cep" @keyup="buscaCEP($event.target.value)" />
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
            <input type="text" name="bairro" class=" form-control" placeholder="" aria-describedby="helpBairro"
                v-model="endereco.bairro" />
            <small id="helpBairro" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Cidade</label>
            <input type="text" name="localidade" class="form-control" placeholder="" aria-describedby="helpLocalidade"
                v-model="endereco.localidade" />
            <small id="helpLocalidade" class="text-muted"></small>
        </div>
        <div class="form-group">
            <label for="">UF</label>
            <input type="text" name="uf" class="form-control" placeholder="" aria-describedby="helpUF"
                v-model="endereco.uf" />
            <small id="helpUF" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Numero</label>
            <input type="number" name="numero" class="form-control" placeholder="" aria-describedby="helpNumero"
                v-model="endereco.numero" />
            <small id="helpNumero" class="text-muted"></small>
        </div>

        <div class="form-group">
            <label for="">Complemento</label>
            <input type="text" name="complemento" class="form-control" placeholder="" aria-describedby="helpComplemento"
                v-model="endereco.complemento" />
            <small id="helpComplemento" class="text-muted"></small>
        </div>

        <div class="mb-3">
            <button type="button" class="btn btn-primary" @click="addAddress()">Salvar</button>
            <router-link to="/" type="button" class="btn btn-danger">Cancelar</router-link>
        </div>
    </section>

    <section class="container">
        <div class="card" v-for="(endereco, index) in enderecos" :key="index">
            <p>{{ endereco.cep }}</p>
            <p>{{ endereco.logradouro }}</p>
            <p>{{ endereco.bairro }}</p>
            <p>{{ endereco.localidade }}</p>
            <p>{{ endereco.uf }}</p>
            <p>{{ endereco.numero }}</p>
            <p>{{ endereco.complemento }}</p>
        </div>
    </section>
</template>

<style scoped>

</style>