import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Store } from '../../utils/store';
import MenuBurger from '../menu-burger';

const itemsLinks = [
  { title: 'Обувь для мужчин', path: '/male-shoes' },
  { title: 'Обувь для женщин', path: '/female-shoes' },
];

export default function HeaderLevel_4() {
  const [searchItem, setSearchItem] = useState<string>('');
  const { dispatch } = useContext(Store);
  const [menu, setMenu] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    dispatch({ type: 'SEARCH_ITEM', payload: searchItem });
  }, [dispatch, searchItem]);

  const handleClickMenu = () => {
    setMenu(true);
  };

  return (
    <>
      <div className="bg-black/70 border-t-4 border-b-4 border-lime-400">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <button className="block sm:hidden" onClick={handleClickMenu}>
            <AiOutlineMenu className="fill-lime-400 w-5 h-5" />
          </button>
          <div className="hidden sm:flex">
            {itemsLinks &&
              itemsLinks.map(({ title, path }) => (
                <Link href={path} key={title}>
                  <a
                    className={
                      pathname === path
                        ? 'text-xs text-lime-400 uppercase mr-10 transition-all'
                        : 'text-xs text-gray-200 uppercase mr-10 hover:text-white transition-all'
                    }
                  >
                    {title}
                  </a>
                </Link>
              ))}
          </div>
          <div className="flex items-center w-2/5 sm:w-[250px]">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="bg-gray-200 rounded-l py-1 px-2 text-xs text-gray-600 w-full"
            />
          </div>
        </div>
      </div>
      <MenuBurger active={menu} setMenu={setMenu} />
    </>
  );
}
