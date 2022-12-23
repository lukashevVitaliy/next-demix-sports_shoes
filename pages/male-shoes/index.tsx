import React, { memo, useContext, useMemo, useState } from 'react';
import Pagination from '../../components/pagination';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import ListProducts from '../../components/list-products';
import SortPanel from '../../components/sort-panel';
import FiltersMenu from '../../components/filter-menu';
import db from '../../utils/db';
import Product from '../../models/Product';
import { Store } from '../../utils/store';
import { usePagination } from '../../hooks/usePagination';
import Review from '../../models/Review';
import { IProducts, IReviews } from '../../types/models';

interface IProps {
  products: IProducts[];
  reviews: IReviews[];
}

interface IPagination {
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  firstContentIndex: number;
  lastContentIndex: number;
  page: number;
}

const MaleShoesPage = memo(({ products, reviews }: IProps) => {
  const [activeMenuFilters, setActiveMenuFilters] = useState<boolean>(false);
  const { state } = useContext(Store);
  const { sortProduct, filterProduct, searchItem } = state;
  const sortProductName = sortProduct.name || '';

  const maleShoes = useMemo(
    () =>
      products
        .filter(
          (item) =>
            (item.gender === 'Мужчины' &&
              ((sortProductName === 'Новинки' && item.novelty) ||
                (sortProductName === 'Скидки' && item.discount) ||
                [
                  'По умолчанию',
                  'Сначала дешевле',
                  'Сначала дороже',
                  'По Рейтингу отзывов',
                ].includes(sortProductName)) &&
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
            Number(
              sortProductName === 'Сначала дешевле' && a.priceNew - b.priceNew
            ) ||
            Number(
              sortProductName === 'Сначала дороже' && b.priceNew - a.priceNew
            ) ||
            Number(
              sortProductName === 'По Рейтингу отзывов' &&
                b.rating.length - a.rating.length
            )
        )
        .filter(
          (item) =>
            item.gender === 'Мужчины' &&
            item.name.toLowerCase().includes(searchItem.toLowerCase())
        ),
    [filterProduct, products, searchItem, sortProductName]
  );

  // pagination
  const {
    totalPages,
    nextPage,
    prevPage,
    firstContentIndex,
    lastContentIndex,
    page,
  }: IPagination = usePagination({
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
        <ListProducts
          products={maleShoes}
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
});

MaleShoesPage.displayName = 'MaleShoesPage';
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
