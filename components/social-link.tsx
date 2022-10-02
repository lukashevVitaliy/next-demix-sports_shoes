import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IStyle {
  hover: string;
}

export default function SocialLink({ hover }: IStyle) {
  return (
    <div className="flex items-center justify-between w-36">
      <Link href="#">
        <a
          className={`flex items-center rounded-full py-1 px-3 ${hover} transition-all`}
        >
          <Image
            src="/assets/icons/vk.svg"
            width={15}
            height={15}
            alt="vk"
            className=""
          />
        </a>
      </Link>
      <Link href="#">
        <a
          className={`flex items-center rounded-full py-1 px-3 ${hover} transition-all`}
        >
          <Image
            src="/assets/icons/telegram.svg"
            width={15}
            height={15}
            alt="telegram"
            className=""
          />
        </a>
      </Link>
      <Link href="#">
        <a
          className={`flex items-center rounded-full py-1 px-3 ${hover} transition-all`}
        >
          <Image
            src="/assets/icons/youtube.svg"
            width={15}
            height={15}
            alt="youtube"
            className=""
          />
        </a>
      </Link>
    </div>
  );
}
