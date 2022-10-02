import type { NextPage } from 'next';
import CatalogMain from '../components/catalog-main';
import Layout from '../components/layout';
import SliderMainBanner from '../components/sliders/slider-main-banner';
import SliderNewShoes from '../components/sliders/slider-new-shoes';
import SliderTehnologyDemix from '../components/sliders/slider-tehnology-demix';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home">
      <SliderMainBanner />
      <CatalogMain />
      <SliderNewShoes />
      <SliderTehnologyDemix />
    </Layout>
  );
};

export default HomePage;
