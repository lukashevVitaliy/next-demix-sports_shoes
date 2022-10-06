import { NextPage } from 'next';
import React, { useState } from 'react';
import Pagination from '../../components/pagination';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import ListShoes from '../../components/list-shoes';
import SortPanel from '../../components/sort-panel';
import FiltersMenu from '../../components/filter-menu';
import { products } from '../../utils/products';

const MaleShoesPage: NextPage = () => {
  const [activeMenuFilters, setActiveMenuFilters] = useState(false);
  const maleShoes = products.shoes.filter((x) => x.gender === 'Мужчины');

  return (
    <Layout title="Обувь для мужчин">
      <Breadcrumbs title="Обувь для мужчин" path="/male-shoes" title2="" />
      <div className="container mx-auto px-4">
        <h2 className="mb-10">Обувь для мужчин</h2>
        <SortPanel
          activeMenuFilters={activeMenuFilters}
          setActiveMenuFilters={setActiveMenuFilters}
        />
        <FiltersMenu
          activeMenuFilters={activeMenuFilters}
          setActiveMenuFilters={setActiveMenuFilters}
        />
        <ListShoes shoes={maleShoes} />
        <Pagination />
      </div>
    </Layout>
  );
};

export default MaleShoesPage;
