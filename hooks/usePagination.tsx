import { useState } from 'react';

export const usePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  // общее количество страниц (всего элементов/контента на каждой странице)
  const pageCount = Math.ceil(count / contentPerPage);
  // индекс последнего элемента текущей страницы
  const lastContentIndex = page * contentPerPage;
  // индекс первого элемента текущей страницы
  const firstContentIndex = lastContentIndex - contentPerPage;

  // изменить страницу в зависимости от направления вперед или назад
  const changePage = (direction) => {
    setPage((state) => {
      // двигаться вперед
      if (direction) {
        // если страница последняя, ​​ничего не делать
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        // двигаться назад
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  // const setPageSafe = (num) => {
  // если число больше, чем количество страниц, устанавливаем последнюю страницу
  // 	if (num > pageCount) {
  // 		setPage(pageCount);
  // 	} else if (num < 1) {
  // 		setPage(1);
  // 	} else {
  // 		setPage(num);
  // 	}
  // }

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    // setPage: setPageSafe,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
