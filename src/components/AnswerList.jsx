import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ({answers}) => {
    return (
        <div className='answer'>
            {answers.map((answer) =>
                <AnswerItem answer = {answer} key = {answer.id}/>

            )}
        </div>
    )
};

export default AnswerList;
