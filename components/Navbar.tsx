import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="navbar">
      <Link href="/">{t('home')}</Link>
      <Link href="/about">{t('about')}</Link>
      <Link href="/contact">{t('contact')}</Link>
      <Link href="/services">{t('services')}</Link>
      <Link href="/news">{t('news')}</Link>
      <Link href="/pricing">{t('pricing')}</Link>
      <Link href="/activity">{t('recentActivity')}</Link>
    </nav>
  );
};

export default Navbar;
