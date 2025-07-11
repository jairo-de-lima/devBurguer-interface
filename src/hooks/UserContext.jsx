import { createContext, useContext, useState, useEffect, use } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserIfo] = useState({});

  const putUserData = (userInfo) => {
    setUserIfo(userInfo);

    localStorage.setItem('devburguer:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserIfo({});
    localStorage.removeItem('devburguer:userData');
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem('devburguer:userData');

    if (userInfoLocalStorage) {
      setUserIfo(JSON.parse(userInfoLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be a valid context');
  }
  return context;
};
