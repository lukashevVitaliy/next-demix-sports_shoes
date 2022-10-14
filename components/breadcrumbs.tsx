import Link from 'next/link';
import React from 'react';

interface Props {
  path: string;
  title: string;
  title2: string;
}

const Breadcrumbs = ({ path, title, title2 }: Props) => {
  return (
    <div className="container mx-auto px-4">
      <ul className="flex mb-5 text-sm text-gray-600 font-light italic list-none">
        <li>
          <Link href="/">
            <a>Главная</a>
          </Link>
        </li>
        &nbsp;/&nbsp;
        <li>
          <Link href={path}>
            <a>{title}</a>
          </Link>
        </li>
        &nbsp;/&nbsp;
        {title2 && JSON.stringify(title2) !== '{}' && <li>{title2}</li>}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
