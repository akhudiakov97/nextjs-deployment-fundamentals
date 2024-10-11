import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

const ServicesPage = () => {
  const { t } = useTranslation('common');
  const serviceCount = 3;

  return (
    <div>
      <h1>{t('ourServices')}</h1>
      <p>{t('serviceCount', { count: serviceCount })}</p>
      <ul>
        <li>{t('serviceOne')}</li>
        <li>{t('serviceTwo')}</li>
        <li>{t('serviceThree')}</li>
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default ServicesPage;