import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ResultService from '../API/ResultService';
import QuestionService from '../API/QuestionService';


const Testing = ({userID}) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showEndQuestions, setShowEndQuestions] = useState(false);

    useEffect (() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const questions = await QuestionService.getQuestions();
        console.log(questions);
        setQuestions(questions);
    }

    const handleAnswerButtonClick = async (answerID) => {

        const result = {
            UserID: userID,
            QuestionID: questions[currentQuestion].id,
            AnswerID: answerID
        }

        await ResultService.addResult(result);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowEndQuestions(true);
        }
    }

    const history = useHistory();

    const routeChange = (route) => {
        history.push(route);
    }

    return (
        <div>{showEndQuestions ? <div>Вопросы закончились</div> : questions.length > 0 ? 
            <div className='question-section'>
                <div className='question-number'>Вопрос номер {questions[currentQuestion].number}</div>
                <div className='question-text'>{questions[currentQuestion].text}</div>
                <div className='answers-section'>
                    {questions[currentQuestion].answers.map((answer) =>
                        <button onClick={() => handleAnswerButtonClick(answer.id)}>{answer.text}</button>
                    )}
                </div>
            </div> : <></>}
            <button onClick={() => routeChange('results')}>Общая статистика</button>
            <button onClick={() => routeChange('myresults')}>Моя статистика</button>
        </div>
    )
}

export default Testing;