import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNeighbours = 2; // Số lượng trang liền kề sẽ hiển thị
  const maxPagesToShow = 5; // Số trang hiển thị trong một lần

  // Tính toán startPage và endPage dựa trên currentPage và maxPagesToShow
  let startPage = Math.max(1, currentPage - pageNeighbours);
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex justify-center">
        {/* Nút Previous */}
        <li>
          <button
            className={`relative block rounded px-3 py-1.5 text-sm transition duration-300 ${
              currentPage === 1
                ? 'text-gray-400 pointer-events-none dark:text-neutral-400'
                : 'text-gray-700 dark:text-white hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500'
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Hiển thị các trang liền kề */}
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`relative block rounded px-3 py-1.5 text-sm transition duration-300 ${
                currentPage === page
                  ? 'bg-primary-100 text-primary-700 font-medium dark:bg-slate-900 dark:text-primary-500'
                  : 'text-gray-700 dark:text-white hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Nút Next */}
        <li>
          <button
            className={`relative block rounded px-3 py-1.5 text-sm transition duration-300 ${
              currentPage === totalPages
                ? 'text-gray-400 pointer-events-none dark:text-neutral-400'
                : 'text-gray-700 dark:text-white hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500'
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
