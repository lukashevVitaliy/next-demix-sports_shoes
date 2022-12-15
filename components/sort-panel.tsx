import React, { Dispatch } from 'react';
import SortShoes from '../components/sort-shoes';
import { RiArrowLeftRightFill } from 'react-icons/ri';

interface IProps {
  activeMenuFilters: boolean;
  setActiveMenuFilters: Dispatch<boolean>;
}

const SortPanel = ({ activeMenuFilters, setActiveMenuFilters }: IProps) => {
  return (
    <div className="flex justify-between mb-5">
      <button
        className="flex items-center border-l-2 border-gray-400 text-sm text-gray-400 py-2 pl-4 pr-2  hover:text-gray-600 hover:border-lime-400 transition-all"
        onClick={() => setActiveMenuFilters(!activeMenuFilters)}
      >
        <RiArrowLeftRightFill className="text-lg mr-14" />
        <span>Параметры</span>
      </button>
      <SortShoes />
    </div>
  );
};

export default SortPanel;
