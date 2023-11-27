import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { ThemeManager } from '@/components';
import { UserProvider } from '@/context/user';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registration successful:', registration);
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <ThemeManager>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeManager>
  );
};

export default App;
