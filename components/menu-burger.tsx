import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { RiArrowLeftRightFill } from 'react-icons/ri';

interface IProps {
  active: boolean;
}

const itemsLinks = [
  { title: 'Обувь для мужчин', path: '/male-shoes' },
  { title: 'Обувь для женщин', path: '#' },
];

const MenuBurger: FC<IProps> = ({ active, setMenu }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [active]);

  const handleClickClose = () => {
    setMenu(false);
  };
  return (
    <>
      <div
        className={
          active
            ? 'fixed top-0 left-0 visible opacity-100 w-full h-full z-20 backdrop-blur-sm transition-all'
            : 'fixed top-0 -left-[100%] invisible opacity-0 w-full h-full z-20 transition-all'
        }
        onClick={handleClickClose}
      >
        <div className="bg-black/70 border-r-2 border-lime-400 shadow-lg shadow-white p-5 w-2/3 h-full">
          <div className="relative flex flex-col rounded shadow-lg  shadow-white text-lime-400 w-full h-full">
            <button
              className="absolute top-3 right-3"
              onClick={handleClickClose}
            >
              <RiArrowLeftRightFill className="w-5 h-5" />
            </button>
            <div className="mx-auto mt-10">
              <Link href="/">
                <a>
                  <Image
                    src="/assets/icons/logo-demiks.svg"
                    width={130}
                    height={50}
                    alt="logo Demix"
                  />
                </a>
              </Link>
            </div>
            <div className="mt-10 mx-auto italic">
              {itemsLinks &&
                itemsLinks.map(({ title, path }) => (
                  <Link href={path} key={title}>
                    <a className="block text-base uppercase tracking-widest mb-5">
                      {title}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBurger;
