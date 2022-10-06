import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CatalogMain() {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 items-center justify-between gap-10 sm:grid-cols-2">
        <Link href="/male-shoes">
          <a className="relative grayscale hover:scale-95 hover:grayscale-0 transition-all">
            <Image
              src="/assets/image/photo_site/gender-bnr_male.jpg"
              width={500}
              height={400}
              alt="male"
              layout="responsive"
              className="rounded "
            />
            <span className="absolute bottom-10 right-0 text-lime-400 font-semibold py-2 px-10 bg-black/50 uppercase">
              Мужчинам
            </span>
          </a>
        </Link>

        <Link href="#">
          <a className="relative grayscale hover:scale-95 hover:grayscale-0 transition-all">
            <Image
              src="/assets/image/photo_site/gender-bnr_female.jpg"
              width={500}
              height={400}
              alt="female"
              layout="responsive"
              className="rounded "
            />
            <span className="absolute bottom-10 right-0 text-lime-400 font-semibold py-2 px-10 bg-black/50 uppercase">
              Женщинам
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
