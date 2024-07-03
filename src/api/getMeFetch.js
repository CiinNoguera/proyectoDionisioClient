export const getMeFetch = async (token) => {
    try {
        const url = 'http://localhost:3434/api/v1/user/me';
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const res = await fetch(url, params);
        const result = await res.json();

        if(res.status !== 200) throw result;

        return result;
    } catch(error){
        throw error;
    }
};

