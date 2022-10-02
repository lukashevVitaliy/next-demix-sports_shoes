import Link from 'next/link';
import React from 'react';

interface IProps {
  path: string;
  title: string;
  title2: string;
}

const Breadcrumbs = ({ path, title, title2 }: IProps) => {
  return (
    <div className="container mx-auto px-4">
      <ul className="flex mb-5 text-xs text-gray-600 font-light list-none md:text-sm">
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
