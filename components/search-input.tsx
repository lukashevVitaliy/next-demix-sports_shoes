import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/store';

export const SearchInput = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SEARCH_ITEM', payload: searchItem });
  }, [dispatch, searchItem]);

  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
      className="bg-gray-200 rounded-l py-1 px-2 text-xs text-gray-600 w-full"
    />
  );
};
