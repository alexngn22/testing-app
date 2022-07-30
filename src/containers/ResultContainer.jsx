import React, { useEffect, useState } from 'react'
import Results from '../components/Results';
import ResultService from '../API/ResultService';

const ResultContainer = () => {
    const [result, setResult] = useState({ userCount: 0, results: [] });

    useEffect (() => {
        getResults();
    }, []);

    async function getResults() {
        const results = await ResultService.getResults();
        setResult(results);
    };

    return (
        <div className='user-result'>
            <Results results={result} />
        </div>
    )
}

export default ResultContainer;