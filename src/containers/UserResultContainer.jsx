import React, { useEffect, useState } from 'react'
import UserResult from '../components/UserResult';
import ResultService from '../API/ResultService';

const UserResultContainer = ({userID}) => {
    const [result, setResult] = useState({ results: [] });

    useEffect (() => {
        console.log(userID);
        getResults();
    }, []);

    async function getResults() {
        const results = await ResultService.getUserResult(userID);
        setResult(results);
    };

  return (
    <div className='user-result'>
        <UserResult results={result.results} />
    </div>
  )
}

export default UserResultContainer;