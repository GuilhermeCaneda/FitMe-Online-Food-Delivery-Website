import { createContext, useState } from 'react';

interface AuthContextValue {
  userName: string;
  isLogged: boolean;
  token: string;
  logIn: (username: string, token: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userName, setUsername] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const logIn = (username: string, token: string) => {
    setUsername(username);
    setIsLogged(true);
    setToken(token);
  }

  const logOut = () => {
    setUsername('');
    setIsLogged(false);
    setToken('');
  }

  const authContextValue: AuthContextValue = {
    userName,
    isLogged,
    token,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
};