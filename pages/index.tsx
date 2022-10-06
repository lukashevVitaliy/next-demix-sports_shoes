import type { NextPage } from 'next';
import CatalogMain from '../components/catalog-main';
import Layout from '../components/layout';
import SliderMainBanner from '../components/sliders/slider-main-banner';
import SliderNewShoes from '../components/sliders/slider-new-shoes';
import SliderTehnologyDemix from '../components/sliders/slider-tehnology-demix';

import { products } from '../utils/products';

const HomePage: NextPage = () => {
  const newShoes = products.shoes.filter((x) => x.novelty === true);
  const maleShoes = products.shoes.filter((x) => x.gender === 'Мужчины');
  const femaleShoes = products.shoes.filter((x) => x.gender === 'Женщины');

  return (
    <Layout title="Home">
      <SliderMainBanner />
      <CatalogMain maleShoes={maleShoes} femaleShoes={femaleShoes} />
      <SliderNewShoes newShoes={newShoes} />
      <SliderTehnologyDemix />
    </Layout>
  );
};

export default HomePage;
