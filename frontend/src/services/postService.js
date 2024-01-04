import axios from 'axios';
const { REACT_APP_API_PORT } = process.env;
export async function createPost(data) {
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/post/createpost`, data);
        return response.data;
    } catch (error) {
        return error;
    }
}
export async function getAllPosts() {
    try {
        const response = await axios.get(`${REACT_APP_API_PORT}/post/getpost`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function getPostById(id) {
    try {
        const response = await axios.get(`${REACT_APP_API_PORT}/post/getpost/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}
