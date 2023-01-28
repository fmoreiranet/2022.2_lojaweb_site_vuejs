import { Address } from '@/model/Address';
import http from 'config';

export default {
    add: function (endereco = new Address) {
        console.log(endereco);
        return http.post("endereco/add", endereco);
    },

    list: function (idUser) {
        return http.get("endereco/list/" + idUser);
    },

    get: function (cep) {
        return http.get("endereco/get/" + cep);
    }
};