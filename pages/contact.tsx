import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const ContactPage = () => {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('contactUs')}</h1>
      <p>{t('contactText')}</p>
      <Link href="/">{t('home')}</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default ContactPage;