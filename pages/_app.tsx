import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <LanguageSwitcher />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default appWithTranslation(MyApp);