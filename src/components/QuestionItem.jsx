import React from 'react';

const QuestionItem = (props) => {
    return (
        <div className='question'>
            <div className='question__content'>
                <strong>{props.question.number} {props.question.text}</strong>

            </div>

        </div>
    )
}

export default QuestionItem;