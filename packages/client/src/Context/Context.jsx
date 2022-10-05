import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const myContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState();

  const login = useCallback(async ({ email, password }) => {
    await axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND}/users/login`,
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((response) => setUser(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logout = useCallback(async () => {
    await axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND}/users/logout`, {
        withCredentials: true,
      })
      .then((response) => console.log(response.data), setUser())
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <myContext.Provider value={{ login, logout, user }}>
      {children}
    </myContext.Provider>
  );
};

export default Context;
