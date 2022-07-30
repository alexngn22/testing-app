import axios from 'axios';

export default class UserService {
    static async addUser(user) {
        try {
            const response = await axios.post('http://localhost:5810/api/users', user);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;           
        }
    }
}