import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

const newsItems = [
  { id: 1, title: 'New Feature Release', date: new Date(2024, 0, 1) },
  { id: 2, title: 'Product Update', date: new Date(2024, 1, 15) },
  { id: 3, title: 'Our Company Milestones', date: new Date(2024, 5, 23) }
];

const NewsPage = () => {
  const { t, i18n } = useTranslation('common');

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(i18n.language, { dateStyle: 'medium' }).format(date);
  };
  
  return (
    <div>
      <h1>{t('news')}</h1>
      <ul>
        {newsItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{t('publishedOn', { date: formatDate(item.date) })}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default NewsPage;