import axios from 'axios';

export default class ResultService {
    static async getUserResult(userID) {
        try {
            const response = await axios.get(`http://localhost:5810/api/users/${userID}/results`);
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }

    static async getResults() {
        try {
            const response = await axios.get('http://localhost:5810/api/results');
            return response.data;
        } catch (error) {
            console.log(error);            
        }
    }

    static async addResult(result) {
        try {
            const response = await axios.post('http://localhost:5810/api/results', result);
        } catch (error) {
            console.log(error);            
        }
    }
}