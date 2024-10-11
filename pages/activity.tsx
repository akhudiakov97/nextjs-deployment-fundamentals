import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

const activities: Array<{
  id: number;
  description: "User signed up" | "User uploaded a photo" | "User commented on a post" | "User liked a post";
  timeAgo: number;
  unit: Intl.RelativeTimeFormatUnit;
}> = [
  { id: 1, description: "User signed up", timeAgo: -5, unit: "minute" },
  { id: 2, description: "User uploaded a photo", timeAgo: -2, unit: "hour" },
  { id: 3, description: "User commented on a post", timeAgo: -1, unit: "day" },
  { id: 4, description: "User liked a post", timeAgo: -3, unit: "day" }
];

const ActivityPage = () => {
  const { t, i18n } = useTranslation('common');

  const formatRelativeTime = (time: number, unit: Intl.RelativeTimeFormatUnit) => {
    return new Intl.RelativeTimeFormat(i18n.language, { numeric: 'auto' }).format(time, unit);
  };

  return (
    <div className="container">
      <h1>{t('recentActivity')}</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{t(activity.description)}</p>
            <p>{formatRelativeTime(activity.timeAgo, activity.unit)}</p>
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

export default ActivityPage;
