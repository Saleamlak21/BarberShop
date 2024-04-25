const api_url = process.env.REACT_APP_API_URL;
const a = "asdf"


export const login = async (loginData) => {
    try {
        const response = await fetch(`http://localhost:3001/user-login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
    }

export const register = async (data) => {
    try {
        const response = await fetch(`http://localhost:3001/register-user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });
        return response.json();
        
    } catch (error) {
        console.error(error);
    }
    }
