

import api from '../api/api';

export function signIn(dados, setToken, setId, setLoading, navigateToScreen) {
    setLoading(true);
    api.apiWithoutAuth.post('/account/signin', dados)
        .then((response) => {
            const token = response.data.token;
            const id = response.data.accountId;
            setToken(token);
            setId(id);
            navigateToScreen("Register Child");
            setLoading(false);
        })
        .catch((err) => {
            console.log("Dados inválidos");
            setLoading(false);
        });
}
