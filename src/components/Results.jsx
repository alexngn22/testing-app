import React from 'react';
import Chart from './Chart';

const Results = ({results}) => {
  return (
    <div className='table-result'>
        <strong>Количество тестируемых: {results.userCount}</strong>
        <table>
            <tbody>
                <tr><th>Вопрос</th><th>Правильно</th><th>Неправильно</th></tr>
                {results.results.map((result) =>
                    <tr key={result.questionNumber}>
                        <td>{result.questionNumber}</td>
                        <td>{result.correctAnswerCount}</td>
                        <td>{result.incorrectAnswerCount}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <Chart results={results.results} />
    </div>
  )
}

export default Results;