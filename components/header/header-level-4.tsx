import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';

const itemsLinks = [
  { title: 'Обувь для мужчин', path: '/male-shoes' },
  { title: 'Обувь для женщин', path: '#' },
];

export default function HeaderLevel_4() {
  return (
    <div className="bg-black/70 border-t-4 border-b-4 border-lime-400">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex">
          {itemsLinks &&
            itemsLinks.map(({ title, path }) => (
              <Link href={path} key={title}>
                <a className="text-xs text-gray-200 uppercase mr-10">{title}</a>
              </Link>
            ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Введите название"
            className="bg-gray-200 rounded-l py-1 px-2 text-xs text-gray-600"
          />
          <button className="bg-gray-200 px-2 py-1 rounded-r">
            <BsSearch className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
