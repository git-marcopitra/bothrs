import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { IUser } from './user.types';

const userContext = createContext({} as IUser);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = userContext;

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetch('/api/v1/users?id=0')
      .then((response) => response.json())
      .then(setUser);
  }, []);

  return (
    <Provider
      value={
        user || {
          name: 'Tyron',
          email: 'tyron.droopy@gmail.com',
          role: 'MG patient',
          password: '12345678',
          avatarURL: '',
        }
      }
    >
      {children}
    </Provider>
  );
};

export const useUser = () => useContext(userContext);

export default userContext;
