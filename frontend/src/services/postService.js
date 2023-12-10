import axios from 'axios';
export async function createPost(data) {
    try {
        const response = await axios.post("http://localhost:5000/api/post/createpost", data);
        return response.data;
    } catch (error) {
        return error;
    }
}
export async function getAllPosts() {
    try {
        const response = await axios.get("http://localhost:5000/api/getpost");
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function getPostById(id) {
    try {
        const response = await axios.get(`http://localhost:5000/api/getpost/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}
