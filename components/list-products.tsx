import React from 'react';
import CardProducts from './card-products';
import { IProducts, IReviews } from '../utils/models';

interface AppendIProducts extends IProducts {
  _id?: string;
}

interface IProps {
  products: AppendIProducts[];
  reviews: IReviews[];
  firstContentIndex: number;
  lastContentIndex: number;
}

const ListProducts = ({
  products,
  reviews,
  firstContentIndex,
  lastContentIndex,
}: IProps) => {
  return (
    <div className="grid grid-cols-1 grid-flow-row justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4">
      {products.slice(firstContentIndex, lastContentIndex).map((product) => (
        <CardProducts product={product} reviews={reviews} key={product._id} />
      ))}
    </div>
  );
};

export default ListProducts;
