import React from 'react'

const UserResult = ({results}) => {
  return (
    <div className='user-result'>
        <table>
            <tbody>
                <tr><th>Вопрос</th><th>Ответ</th><th>Правильно?</th></tr>
                {results.map((result) =>
                    <tr key={result.questionNumber}>
                        <td>{result.questionText}</td>
                        <td>{result.answerText}</td>
                        <td>{result.isCorrect ? 'Да' : 'Нет'}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default UserResult;