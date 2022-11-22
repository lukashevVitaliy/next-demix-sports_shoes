import React, { useContext, useState } from 'react';
import Pagination from '../../components/pagination';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import ListShoes from '../../components/list-shoes';
import SortPanel from '../../components/sort-panel';
import FiltersMenu from '../../components/filter-menu';
import db from '../../utils/db';
import Product from '../../models/Product';
import { Store } from '../../utils/store';
import { usePagination } from '../../hooks/usePagination';
import Review from '../../models/Review';

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
  reviews: {
    _id: string;
    slug: string;
    name: string;
    aboutProduct: string;
    advantage: string;
    disadvantages: string;
    nameUser: string;
    userCity: string;
    impression: string;
    reliability: string;
    functionality: string;
    quality: string;
    photoMatching: string;
    recommend: boolean;
    discommend: boolean;
    periodOfUseUser: string;
    frequencyOfUseUser: string;
    createdAt: string;
  }[];
}

const MaleShoesPage = ({ products, reviews }: IProps) => {
  const [activeMenuFilters, setActiveMenuFilters] = useState(false);
  const { state } = useContext(Store);
  const { sortProduct, filterProduct, searchItem } = state;

  const maleShoes = products
    .filter(
      (item) =>
        (item.gender === 'Мужчины' &&
          ((sortProduct.name === 'Новинки' && item.novelty) ||
            (sortProduct.name === 'Скидки' && item.discount) ||
            [
              'По умолчанию',
              'Сначала дешевле',
              'Сначала дороже',
              'По Рейтингу отзывов',
            ].includes(sortProduct.name)) &&
          Object.keys(filterProduct).length === 0) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Enrblast' &&
          item.enrblast === true) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Cushfoam' &&
          item.cushfoam === true) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Flexzone360' &&
          item.flexzone360 === true) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Кроссовки' &&
          item.category === 'Кроссовки') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Кеды' &&
          item.category === 'Кеды') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Бутсы' &&
          item.category === 'Бутсы') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Спортивный стиль' &&
          item.sportType === 'Спортивный стиль') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Футбол' &&
          item.sportType === 'Футбол') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Бег' &&
          item.sportType === 'Бег') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Фитнес' &&
          item.sportType === 'Фитнес') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Волейбол' &&
          item.sportType === 'Волейбол') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Трейлраннинг' &&
          item.sportType === 'Трейлраннинг') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Асфальт' &&
          item.coverage === 'Асфальт') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Зал' &&
          item.coverage === 'Зал') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Все типы покрытий' &&
          item.coverage === 'Все типы покрытий') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Грунт и искусственное покрытие' &&
          item.coverage === 'Грунт и искусственное покрытие') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Натуральный и исскуственный газон' &&
          item.coverage === 'Натуральный и исскуственный газон') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Пересеченная местность' &&
          item.coverage === 'Пересеченная местность') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Весна' &&
          item.season?.includes('Весна')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Лето' &&
          item.season?.includes('Лето')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Осень' &&
          item.season?.includes('Осень')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Зима' &&
          item.season?.includes('Зима')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Нейтральная пронация' &&
          item.typeOfPronation === 'Нейтральная пронация') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Гиперпронация' &&
          item.typeOfPronation === 'Гиперпронация') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Да' &&
          item.reflectiveDetails === 'Да') ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Синтетическая кожа' &&
          item.materialUpper?.includes('синтетическая кожа')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Полиэстер' &&
          item.materialUpper?.includes('полиэстер')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Натуральная кожа' &&
          item.materialUpper?.includes('натуральная кожа')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Полиуретан' &&
          item.materialUpper?.includes('полиуретан')) ||
        (item.gender === 'Мужчины' &&
          filterProduct === 'Хлопок' &&
          item.materialUpper?.includes('хлопок'))
    )
    .sort(
      (a, b) =>
        (sortProduct.name === 'Сначала дешевле' && a.priceNew - b.priceNew) ||
        (sortProduct.name === 'Сначала дороже' && b.priceNew - a.priceNew) ||
        (sortProduct.name === 'По Рейтингу отзывов' &&
          b.rating.length - a.rating.length)
    )
    .filter(
      (item) =>
        item.gender === 'Мужчины' &&
        item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

  // pagination
  const {
    totalPages,
    nextPage,
    prevPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({
    contentPerPage: 12,
    count: maleShoes.length,
  });

  return (
    <Layout title="Обувь для мужчин">
      <Breadcrumbs title="Обувь для мужчин" path="/male-shoes" title2="" />
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl lg:text-4xl md:mb-5 lg:mb-10">
          Обувь для мужчин
        </h2>
        <SortPanel
          activeMenuFilters={activeMenuFilters}
          setActiveMenuFilters={setActiveMenuFilters}
        />
        <FiltersMenu
          activeMenuFilters={activeMenuFilters}
          setActiveMenuFilters={setActiveMenuFilters}
        />
        {maleShoes.filter((item) =>
          item.name.toLowerCase().includes(searchItem.toLowerCase())
        ).length === 0 && <h5>Товар не найден...</h5>}
        <ListShoes
          shoes={maleShoes}
          reviews={reviews}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
        />
        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </Layout>
  );
};

export default MaleShoesPage;

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
