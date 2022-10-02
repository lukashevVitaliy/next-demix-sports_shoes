import Image from 'next/image';
import Link from 'next/link';
import SocialLink from '../social-link';

const infoItems = [
  { title: 'О бренде', path: '/about' },
  { title: 'Магазины', path: '/shops' },
  { title: 'Амбассадоры', path: '/ambassador' },
];
const services = [
  { title: 'Оплата и доставка', path: '/' },
  { title: 'Обмен и возврат', path: '/exchange-and-refund' },
  { title: 'Пользовательское соглашение', path: '/user-agreement' },
  { title: 'Публичная оферта', path: '/publick-offer' },
  { title: 'Политика обработки персональных данных', path: '/personal-data' },
];

export default function FooterLevel_1() {
  return (
    <div className="bg-black/70">
      <div className="container mx-auto px-4 py-12 flex justify-between text-xs text-gray-200">
        <div className="flex flex-col">
          <Link href="/">
            <a className="mb-5">
              <Image
                src="/assets/icons/logo-demiks.svg"
                width={130}
                height={50}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-base uppercase mb-3">Информация</p>
          {infoItems &&
            infoItems.map(({ title, path }) => (
              <Link href={path} key={title}>
                <a className="text-sm font-light mb-2 hover:text-lime-400 transition-all">
                  {title}
                </a>
              </Link>
            ))}
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-base uppercase mb-3">Сервис и помощь</p>
          {services &&
            services.map(({ title, path }) => (
              <Link href={path} key={title}>
                <a className="text-sm font-light mb-2 hover:text-lime-400 transition-all">
                  {title}
                </a>
              </Link>
            ))}
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-base uppercase mb-3">Контакты</p>
          <Link href="tel:84957777757">
            <a className="text-sm font-light mb-2 hover:text-lime-400 transition-all">
              8 (495) 777-77-57
            </a>
          </Link>
          <Link href="mailto:support@demix.ru">
            <a className="text-sm font-light mb-5 hover:text-lime-400 transition-all">
              support@demix.ru
            </a>
          </Link>
          <SocialLink hover="hover:bg-lime-400" />
        </div>
      </div>
    </div>
  );
}
