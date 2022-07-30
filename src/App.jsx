import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, UserIDContext } from './context';
import AppRouter from './components/AppRouter';

function App() {
  const [userID, setUserID] = useState(0);
  const [isAuth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setAuth
    }}>
        <UserIDContext.Provider value={{
        userID,
        setUserID
      }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </UserIDContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
