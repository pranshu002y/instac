import axios from 'axios';
const { REACT_APP_API_PORT } = process.env;
export async function loginUser(data) {
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/users/login`, data);
        return response.data;
    } catch (error) {
       return error
    }
}
export async function registerUser(data) {
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/users/register`, data);
        return response.data;
    } catch (error) {
       return error
    }
}
export const getLoginStatus = async () => {
    try {
        const response = await axios.get(`${REACT_APP_API_PORT}/users/loggedin`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getUserProfile = async  () =>{
    try {
        const response = await axios.get(`${REACT_APP_API_PORT}/users/getalluser`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getItemWithExpiry = (key)=> {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null;
    }
    const item = JSON.parse(itemString);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

export async function searchUser(userName) {
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/users/searchuser`, {userName:userName});
            return response.data;
    } catch (error) {
        return error
    }
}



