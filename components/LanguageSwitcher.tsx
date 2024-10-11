import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('uk')}>Українська</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
