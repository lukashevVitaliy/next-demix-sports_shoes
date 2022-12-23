import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuBurger from '../menu-burger';
import { SearchInput } from '../search-input';

const itemsLinks = [
  { title: 'Обувь для мужчин', path: '/male-shoes' },
  { title: 'Обувь для женщин', path: '/female-shoes' },
];

export default function HeaderLevel_4() {
  const [menu, setMenu] = useState(false);
  const { pathname } = useRouter();

  const handleClickMenu = () => {
    setMenu(true);
  };

  return (
    <>
      <div className="bg-black/70 border-t-4 border-b-4 border-lime-400">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <button className="block sm:hidden" onClick={handleClickMenu}>
            <AiOutlineMenu className="text-lime-400 w-5 h-5" />
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
            <SearchInput />
          </div>
        </div>
      </div>
      <MenuBurger active={menu} setMenu={setMenu} />
    </>
  );
}
