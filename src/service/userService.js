import { User } from '@/model/User'; //@ referencia a pasta principal do sistema (SRC)
import http from './config';

export default {


    add: function (user = new User) {
        console.log(user);
        return http.post("/usuario/add", user);
    },

    list: function () {
        return http.get("/usuario/list");
    },

    get: function (id) {
        return http.get("/usuario/" + id);
    },

    logon: function (user) {
        let dadoslogin = { email: user.email, password: user.senha };
        return http.post("/usuario/login", dadoslogin);
    }
};