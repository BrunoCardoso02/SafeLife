import axios from "axios";
import api from "../src/api/api";


export function signUp(email, password, fullName, birthDate, bloodType, userName) {

    const dados = {
        email: email,
        password: password,
        fullName: fullName,
        birthDate: birthDate,
        bloodyType: bloodType,
        userName: userName
    }
    api('/account/signup', dados)
        .then(() => {
            console.log("Usuário cadastrado!")
        })
        .catch((err) => console.log("Ops deu erro", err))
}


