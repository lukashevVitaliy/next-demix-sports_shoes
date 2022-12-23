import React, { memo } from 'react';

interface IPagination {
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  page: number;
}

const Pagination = memo(
  ({ page, totalPages, nextPage, prevPage }: IPagination) => {
    return (
      <div className="mt-6 md:mt-10 text-sm md:text-base text-center font-light text-gray-600">
        <button
          type="button"
          className="mr-5 md:mr-10 hover:text-lime-400 transition-all"
          onClick={prevPage}
        >
          &lt; Предыдущая
        </button>
        <span>
          {page} из {totalPages}
        </span>
        <button
          type="button"
          className="ml-5 md:ml-10 hover:text-lime-400 transition-all"
          onClick={nextPage}
        >
          Следующая &gt;
        </button>
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';
export default Pagination;
