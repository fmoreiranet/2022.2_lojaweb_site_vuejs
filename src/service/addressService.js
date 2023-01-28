import { Address } from '@/model/Address';
import axios from 'axios';
import http from './config';

export default {
    add: function (address = new Address) {
        console.log(address);
        return http.post("address/add", address);
    },

    list: function (idUser) {
        return http.get("address/list/" + idUser);
    },

    get: function (id) {
        return http.get("address/" + id);
    },
    getAddressCEP: async function (cep) {
        try {
            if (cep.length > 7) {
                let newCep = encodeURI(`https://viacep.com.br/ws/${cep}/json/`);
                let res = await axios.get(newCep);
                if (res.data.erro) {
                    throw new Error("Endereço não encontrado!");
                }
                return res.data;
            }
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Erro ao buscar o endereço!");
        }
    }
};