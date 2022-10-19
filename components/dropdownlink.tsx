import Link from 'next/link';
import React from 'react';

interface IProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const Dropdownlink = (props: IProps) => {
  let { href, children, ...rest } = props;

  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default Dropdownlink;
