import React from 'react';
import CardShoes from './card-shoes';

const ListShoes = () => {
  return (
    <div className="grid grid-cols-1 grid-flow-row justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4">
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
      <CardShoes />
    </div>
  );
};

export default ListShoes;
