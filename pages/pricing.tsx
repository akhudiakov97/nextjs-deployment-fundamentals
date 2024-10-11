import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 99.99 }
];

const PricingPage = () => {
  const { t, i18n } = useTranslation('common');
  const [formattedPrices, setFormattedPrices] = useState<string[]>([]);

  useEffect(() => {
    const prices = products.map(product =>
      new Intl.NumberFormat(i18n.language, {
        style: 'currency',
        currency: i18n.language === 'uk' ? 'UAH' : i18n.language === 'es' ? 'EUR' : 'USD'
      }).format(product.price)
    );
    setFormattedPrices(prices);
  }, [i18n.language]);

  return (
    <div className="container">
      <h1>{t('pricing')}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{formattedPrices[index] || product.price}</p>
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

export default PricingPage;
