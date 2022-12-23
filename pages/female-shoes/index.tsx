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

const FemaleShoesPage = memo(({ products, reviews }: IProps) => {
  const [activeMenuFilters, setActiveMenuFilters] = useState<boolean>(false);
  const { state } = useContext(Store);
  const { sortProduct, filterProduct, searchItem } = state;
  const sortProductName = sortProduct.name || '';

  const femaleShoes = useMemo(
    () =>
      products
        .filter(
          (item) =>
            (item.gender === 'Женщины' &&
              ((sortProductName === 'Новинки' && item.novelty) ||
                (sortProductName === 'Скидки' && item.discount) ||
                [
                  'По умолчанию',
                  'Сначала дешевле',
                  'Сначала дороже',
                  'По Рейтингу отзывов',
                ].includes(sortProductName)) &&
              Object.keys(filterProduct).length === 0) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Enrblast' &&
              item.enrblast === true) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Cushfoam' &&
              item.cushfoam === true) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Flexzone360' &&
              item.flexzone360 === true) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Кроссовки' &&
              item.category === 'Кроссовки') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Кеды' &&
              item.category === 'Кеды') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Бутсы' &&
              item.category === 'Бутсы') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Спортивный стиль' &&
              item.sportType === 'Спортивный стиль') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Футбол' &&
              item.sportType === 'Футбол') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Бег' &&
              item.sportType === 'Бег') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Фитнес' &&
              item.sportType === 'Фитнес') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Волейбол' &&
              item.sportType === 'Волейбол') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Трейлраннинг' &&
              item.sportType === 'Трейлраннинг') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Асфальт' &&
              item.coverage === 'Асфальт') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Зал' &&
              item.coverage === 'Зал') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Все типы покрытий' &&
              item.coverage === 'Все типы покрытий') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Грунт и искусственное покрытие' &&
              item.coverage === 'Грунт и искусственное покрытие') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Натуральный и исскуственный газон' &&
              item.coverage === 'Натуральный и исскуственный газон') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Пересеченная местность' &&
              item.coverage === 'Пересеченная местность') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Весна' &&
              item.season?.includes('Весна')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Лето' &&
              item.season?.includes('Лето')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Осень' &&
              item.season?.includes('Осень')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Зима' &&
              item.season?.includes('Зима')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Нейтральная пронация' &&
              item.typeOfPronation === 'Нейтральная пронация') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Гиперпронация' &&
              item.typeOfPronation === 'Гиперпронация') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Да' &&
              item.reflectiveDetails === 'Да') ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Синтетическая кожа' &&
              item.materialUpper?.includes('синтетическая кожа')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Полиэстер' &&
              item.materialUpper?.includes('полиэстер')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Натуральная кожа' &&
              item.materialUpper?.includes('натуральная кожа')) ||
            (item.gender === 'Женщины' &&
              filterProduct === 'Полиуретан' &&
              item.materialUpper?.includes('полиуретан')) ||
            (item.gender === 'Женщины' &&
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
            item.gender === 'Женщины' &&
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
    count: femaleShoes.length,
  });

  return (
    <Layout title="Обувь для женщин">
      <Breadcrumbs title="Обувь для женщин" path="/female-shoes" title2="" />
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl lg:text-4xl md:mb-5 lg:mb-10">
          Обувь для женщин
        </h2>
        <SortPanel
          activeMenuFilters={activeMenuFilters}
          setActiveMenuFilters={setActiveMenuFilters}
        />
        <FiltersMenu
          activeMenuFilters={activeMenuFilters}
          setActiveMenuFilters={setActiveMenuFilters}
        />
        {femaleShoes.filter((item) =>
          item.name.toLowerCase().includes(searchItem.toLowerCase())
        ).length === 0 && <h5>Товар не найден...</h5>}
        <ListProducts
          products={femaleShoes}
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

FemaleShoesPage.displayName = 'FemaleShoesPage';
export default FemaleShoesPage;

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
