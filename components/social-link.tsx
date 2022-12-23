import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IStyle {
  hover: string;
}

const SocialLink = memo(({ hover }: IStyle) => {
  return (
    <div className="flex items-center justify-between w-36">
      <Link href="https://vk.com/">
        <a
          target="_blank"
          className={`flex items-center rounded-full border border-white py-1 px-3 ${hover} transition-all`}
        >
          <Image
            src="/assets/icons/vk.svg"
            width={15}
            height={15}
            alt="vk"
            priority
          />
        </a>
      </Link>
      <Link href="https://web.telegram.org/">
        <a
          target="_blank"
          className={`flex items-center rounded-full border border-white py-1 px-3 ${hover} transition-all`}
        >
          <Image
            src="/assets/icons/telegram.svg"
            width={15}
            height={15}
            alt="telegram"
            priority
          />
        </a>
      </Link>
      <Link href="https://www.youtube.com/">
        <a
          target="_blank"
          className={`flex items-center rounded-full border border-white py-1 px-3 ${hover} transition-all`}
        >
          <Image
            src="/assets/icons/youtube.svg"
            width={15}
            height={15}
            alt="youtube"
            priority
          />
        </a>
      </Link>
    </div>
  );
});

SocialLink.displayName = 'SocialLink';
export default SocialLink;
