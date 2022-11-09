import React from 'react';

const Pagination = ({ page, totalPages, nextPage, prevPage }) => {
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
};

export default Pagination;
