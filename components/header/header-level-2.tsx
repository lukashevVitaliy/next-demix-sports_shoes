import Image from 'next/image';
import Link from 'next/link';

const itemLinks = [
  { title: 'О бренде', path: '/about' },
  { title: 'Магазины', path: '/shops' },
  { title: 'Амбассадоры', path: '/ambassador' },
];

export default function HeaderLevel_2() {
  return (
    <div className="bg-black/70 border-b-4 border-lime-400">
      <div className="container mx-auto py-2 px-4 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <Link href="/">
            <a>
              <Image
                src="/assets/icons/logo-demiks.svg"
                width={130}
                height={50}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className="flex justify-between w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
          {itemLinks &&
            itemLinks.map(({ title, path }) => (
              <Link key={title} href={path}>
                <a className="text-sm text-gray-200 font-light">{title}</a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
