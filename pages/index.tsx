import CatalogMain from '../components/catalog-main';
import Layout from '../components/layout';
import SliderMainBanner from '../components/sliders/slider-main-banner';
import SliderNewShoes from '../components/sliders/slider-new-shoes';
import SliderTehnologyDemix from '../components/sliders/slider-tehnology-demix';
import Product from '../models/Product';
import Review from '../models/Review';
import db from '../utils/db';
import { IProducts, IReviews } from '../utils/models';

interface IProps {
  products: IProducts[];
  reviews: IReviews[];
}

const HomePage = ({ products, reviews }: IProps) => {
  const newShoes = products.filter((x) => x.novelty === true);

  return (
    <Layout title="Home">
      <SliderMainBanner />
      <CatalogMain />
      <SliderNewShoes products={newShoes} reviews={reviews} />
      <SliderTehnologyDemix />
    </Layout>
  );
};

export default HomePage;

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  const reviews = await Review.find().lean();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      reviews: JSON.parse(JSON.stringify(reviews)),
    },
  };
}
