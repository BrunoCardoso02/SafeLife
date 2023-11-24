import axios from "axios";
import api from "../src/api/api";


export const signin = async(email, password, setToken, setId, navigationScreen) => {
    const dados = {
        email: email,
        password: password,

    }
    try {
        const res = await api.apiWithoutAuth.post('/account/signin', dados);
        const token = res.data.token;
        const id = res.data.accountId;
    
        if (id && token) {
          navigationScreen("Register Child Screen");
          console.log(res.data.token);
          console.log(id);
          setToken(token);
          setId(id);
        } else {
          console.log('ID e/ou token são nulos ou indefinidos na resposta.');
        }
      } catch (err) {
        console.log('Deu erro', err);
}

}
