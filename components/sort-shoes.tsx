import { Listbox } from '@headlessui/react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { TbSortAscendingNumbers } from 'react-icons/tb';
import { TbSortDescendingNumbers } from 'react-icons/tb';
import { TbStar } from 'react-icons/tb';
import { AiOutlinePercentage } from 'react-icons/ai';
import { MdOutlineFiberNew } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { Store } from '../utils/store';

const items = [
  {
    id: 1,
    name: 'По умолчанию',
    icon: <AiOutlineUnorderedList className="text-base" />,
  },
  {
    id: 2,
    name: 'Сначала дешевле',
    icon: <TbSortAscendingNumbers className="text-base" />,
  },
  {
    id: 3,
    name: 'Сначала дороже',
    icon: <TbSortDescendingNumbers className="text-base" />,
  },
  {
    id: 4,
    name: 'По Рейтингу отзывов',
    icon: <TbStar className="text-base" />,
  },
  { id: 5, name: 'Новинки', icon: <MdOutlineFiberNew className="text-base" /> },
  {
    id: 6,
    name: 'Скидки',
    icon: <AiOutlinePercentage className="text-base" />,
  },
];

const SortShoes = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SORT_METHOD_VALUE', payload: selectedItem });
  }, [dispatch, selectedItem]);

  return (
    <div className=" relative flex flex-col text-gray-400 py-2 px-4 w-[240px] border-r-2 border-gray-400 hover:border-lime-400 hover:text-gray-600">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="flex items-center justify-between pl-2">
          {selectedItem.name}
          <RiArrowLeftRightFill className="text-lg ml-2" />
        </Listbox.Button>
        <Listbox.Options className="absolute top-11 left-5 z-10 w-full">
          {items.map((item) => (
            <Listbox.Option key={item.id} value={item} as={Fragment}>
              {({ active }) => (
                <li
                  className={`${
                    active
                      ? 'flex items-center justify-between px-2 py-1 rounded bg-gray-600 text-gray-200 text-sm cursor-pointer'
                      : 'flex items-center justify-between px-2 py-1 rounded bg-white text-gray-400 text-sm cursor-pointer'
                  }`}
                >
                  {item.name} {item.icon}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default SortShoes;
