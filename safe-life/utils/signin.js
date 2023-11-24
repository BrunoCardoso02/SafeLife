import axios from "axios";
import api from "../src/api/api";


export const signin = async (email, senha, setToken, setId, navigation) => {
  const dados = {
    email: email,
    password: senha
  };

  try {
    const res = await api.apiWithoutAuth.post('/account/signin', dados, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    const token = res.data.token;
    const id = res.data.accountId;

    if (id && token) {
      navigation.navigate('Register Child');
      console.log(res.data.token);
      console.log(id);
      setToken(token);
      setId(id);
    } else {
      console.log('ID e/ou token são nulos ou indefinidos na resposta.');
    }
  } catch (err) {
    console.log('Deu erraao', err);
  }
};

export default signin