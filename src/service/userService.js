import { User } from '@/model/User'; //@ referencia a pasta principal do sistema (SRC)
import http from './config';
// import { FirebaseApp } from 'firebase/app';

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
    },
    upload: function (dataSend) {
        const request_config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        return http.post("/usuario/upload", dataSend, request_config);
    },
    // uploadFirebase: function (dataSend) {
    //     let auth = FirebaseApp.auth();
    //     let storageRef = FirebaseApp.storage().ref();

    //     // Push to child path.
    //     storageRef.child('images/user' + file.name)
    //         .put(file, metadata)
    //         .then(function (snapshot) {
    //             console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    //             console.log('File metadata:', snapshot.metadata);
    //             // Let's get a download URL for the file.
    //             snapshot.ref.getDownloadURL().then(function (url) {
    //                 console.log('File available at', url);
    //                 // document.getElementById('linkbox').innerHTML = '<a href="' + url + '">Click For File</a>';
    //                 return url
    //             });
    //         }).catch(function (error) {
    //             console.error('Upload failed:', error);
    //         });
    // },

    uploadBase64: function (files, idUser) {
        let base64files = [];
        for (let f of files) {
            this.getBase64(f)
                .then(function (base64) {
                    base64files.push(base64);
                })
        }

        const request_config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        let dataSend = { idUser: idUser, files: base64files };
        return http.post("/usuario/update/", dataSend, request_config);
    },

    getBase64: function (file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
};