import React, { useContext, useState } from 'react';
import UserService from '../API/UserService';
import { AuthContext, UserIDContext } from '../context';

const Login =() => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  const {isAuth, setAuth} = useContext(AuthContext);
  const {userID, setUserID} = useContext(UserIDContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      LastName: lastName,
      FirstName: firstName
    }
    const userID = await UserService.addUser(newUser);
    if (userID) {
      setUserID(userID);
      setAuth(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          value={lastName}
          placeholder='фамилия'
          onChange={ e => setLastName(e.target.value)}
          type='text'
        />
        <input
          value={firstName}
          placeholder='имя'
          onChange={ e => setFirstName(e.target.value)}
          type='text'
        />
        <button>Начать</button>
    </form>
  )
}

export default Login;