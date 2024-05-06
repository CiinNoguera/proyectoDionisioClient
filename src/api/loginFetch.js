export const loginFetch = async (data) => {
    try {
        const url = 'http://localhost:3434/api/v1/auth/login';
        const params = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        };

        const res = await fetch(url, params);
        const result = await res.json();

        if(res.status !== 200) throw result;

        return result;
    } catch(error){
        throw error;
    }
};

