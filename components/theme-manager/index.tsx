import { Global, ThemeProvider } from '@emotion/react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEYS, LocalStorageKey } from '@/constants';
import { GlobalStyles } from '@/styles';

const ThemeManager: FC<PropsWithChildren> = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(
      JSON.parse(
        (window.localStorage.getItem(
          LOCAL_STORAGE_KEYS[LocalStorageKey.DARK_THEME]
        ) as 'false' | 'true' | null) ?? 'false'
      )
    );
  }, []);

  const changeTheme = (dark: boolean) =>
    setDark(() => {
      window.localStorage.setItem(
        LOCAL_STORAGE_KEYS[LocalStorageKey.DARK_THEME],
        JSON.stringify(dark)
      );
      return dark;
    });

  return (
    <ThemeProvider theme={{ dark, changeTheme }}>
      <Global styles={GlobalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeManager;
