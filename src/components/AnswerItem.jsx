import React from 'react';

const AnswerItem = (props) => {
    return (
        <div className='answer'>
            <div className='answer__content'>
                <strong>{props.answer.text}</strong>
            </div>
        </div>
    )
};

export default AnswerItem;