import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserResultContainer from '../containers/UserResultContainer';
import ResultContainer from '../containers/ResultContainer';
import Login from '../components/Login';
import Testing from '../components/Testing';
import { AuthContext, UserIDContext } from '../context';

const AppRouter = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const {userID, setUserID} = useContext(UserIDContext);

    return (
        <Switch>
          <Route path='/results'><ResultContainer/></Route>
          <Route path='/test'>{ isAuth ? <Testing userID={userID}/> : <Redirect to='/' />}</Route>
          <Route path='/myresults'>{isAuth ? <UserResultContainer userID={userID}/> : <Redirect to='/' />}</Route>
          <Route exact path='/'>{isAuth ? <Redirect to='/test' /> : <Login />}</Route>
          <Route path='*'><Redirect to='/'/></Route>
        </Switch>
    )
}

export default AppRouter;