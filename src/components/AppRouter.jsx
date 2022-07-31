import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UserResultContainer from '../containers/UserResultContainer';
import ResultContainer from '../containers/ResultContainer';
import Login from '../components/Login';
import Testing from '../components/Testing';
import { AuthContext, UserIDContext } from '../context';

const AppRouter = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const {userID, setUserID} = useContext(UserIDContext);

    return (
        <Routes>
          <Route path='/' element={isAuth ? <Navigate to='/test' /> : <Login />} />
          <Route path='results' element={<ResultContainer/>} />
          <Route path='test' element={ isAuth ? <Testing userID={userID}/> : <Navigate to='/'/>} />
          <Route path='myresults' element ={isAuth ? <UserResultContainer userID={userID}/> : <Navigate to='/' />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    )
}

export default AppRouter;