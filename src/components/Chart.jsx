import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({results}) => {
  return (
    <BarChart width={500} height={300} data={results}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="questionNumber" /> 
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="correctAnswerCount" stackId="a" fill="#188468" name="Правильно"/>
        <Bar dataKey="incorrectAnswerCount" stackId="a" fill="#888888" name="Неправильно"/>
    </BarChart>
  )
}

export default Chart;