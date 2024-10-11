import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

const HomePage = () => {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('intro')}</p>
      <p>{t('missionStatement')}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default HomePage;