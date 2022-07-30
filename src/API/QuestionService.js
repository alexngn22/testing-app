import axios from 'axios';

export default class QuestionService {
    static async getQuestions() {
        try {
            const response = await axios.get('http://localhost:5810/api/questions');
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }
}