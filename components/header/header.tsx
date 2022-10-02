import React from 'react';
import HeaderLevel_1 from './header-level-1';
import HeaderLevel_2 from './header-level-2';
import HeaderLevel_3 from './header-level-3';
import HeaderLevel_4 from './header-level-4';

export default function Header() {
  return (
    <header className="mb-10">
      <HeaderLevel_1 />
      <HeaderLevel_2 />
      <HeaderLevel_3 />
      <HeaderLevel_4 />
    </header>
  );
}
