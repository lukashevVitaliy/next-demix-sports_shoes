import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLevel_3() {
  return (
    <div className="container mx-auto py-5 sm:py-10 px-4 flex items-center justify-between">
      <div className="mx-auto">
        <p className="hidden sm:block sm:text-center sm:mb-5">
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
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-3">
          Спортивная обувь
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 font-semibold text-center tracking-wider uppercase">
          Будь стильным и модным вместе с нами
        </p>
      </div>
    </div>
  );
}
