import { FC } from 'react';
import CatalogMain from '../components/catalog-main';
import Layout from '../components/layout';
import SliderMainBanner from '../components/sliders/slider-main-banner';
import SliderNewShoes from '../components/sliders/slider-new-shoes';
import SliderTehnologyDemix from '../components/sliders/slider-tehnology-demix';
import Product from '../models/Product';
import db from '../utils/db';

interface IProps {
  products: {
    _id: string | undefined;
    slug: string;
    name: string;
    category: string;
    stockAvailability: boolean;
    novelty: boolean;
    discount: string | undefined;
    rating: string | undefined;
    nameColor: string;
    colorSheme1: string;
    colorSheme2?: string;
    images: string[];
    sizesColors: {
      size: number;
      countInStock: number;
    }[];
    priceNew: number;
    priceOld: number;
    currency: string;
    description?: {
      title_1?: string | undefined;
      text_1?: string | undefined;
      title_2?: string | undefined;
      text_2?: string | undefined;
      title_3?: string | undefined;
      text_3?: string | undefined;
      title_4?: string | undefined;
      text_4?: string | undefined;
      title_5?: string | undefined;
      text_5?: string | undefined;
      title_6?: string | undefined;
      text_6?: string | undefined;
      title_7?: string | undefined;
      text_7?: string | undefined;
      title_8?: string | undefined;
      text_8?: string | undefined;
      title_9?: string | undefined;
      text_9?: string | undefined;
      title_10?: string | undefined;
      text_10?: string | undefined;
    };
    gender: string | undefined;
    sportType?: string | undefined;
    coverage?: string | undefined;
    typeOfTraining?: string | undefined;
    anatomicalInsole?: string | undefined;
    reflectiveDetails?: string | undefined;
    differenceSole?: string | undefined;
    typeOfPronation?: string | undefined;
    reinforcedBumper?: string | undefined;
    season?: string | undefined;
    warrantyPeriod?: string | undefined;
    closure?: string | undefined;
    feature?: string | undefined;
    antibacteriaImpregnation?: string | undefined;
    protectionFromMoisture?: string | undefined;
    materialUpper?: string | undefined;
    materialLining?: string | undefined;
    materialSole?: string | undefined;
    countryOfManufacture?: string | undefined;
    enrblast?: boolean;
    cushfoam?: boolean;
    flexzone360?: boolean;
  }[];
}

const HomePage: FC<IProps> = ({ products }) => {
  const newShoes = products.filter((x) => x.novelty === true);
  // const femaleShoes = products.filter((x) => x.gender === 'Женщины');

  return (
    <Layout title="Home">
      <SliderMainBanner />
      <CatalogMain />
      <SliderNewShoes newShoes={newShoes} />
      <SliderTehnologyDemix />
    </Layout>
  );
};

export default HomePage;

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
