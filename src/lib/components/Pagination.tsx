import React from "react";
import PaginationProps from "./PaginationProps";


/**
 * Pagination component for displaying page numbers and handling page changes.
 * @param {Object} props - The props object for the Pagination component.
 * @returns {JSX.Element} - The Pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({ currentPage, pageSize, totalItems, onPageChange }: PaginationProps): JSX.Element => {
  const totalPages: number = Math.ceil(totalItems / pageSize);
  const pages: number[] = [];

  // Build an array of page numbers to display
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  function handlePageClick(pageNumber: number) {
    onPageChange(pageNumber);
  }
  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <>
      {totalPages > 0 ? (
        <nav
          role="navigation"
          aria-label="{{ __('Pagination Navigation') }}"
          className="flex items-center justify-between my-4 not-prose"
        >
          <div className="flex justify-between flex-1 md:hidden not-prose">
            {currentPage === 1 ? (
              <span className="relative  inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  aria-hidden="true"
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous
              </span>
            ) : (
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                className="relative  inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out duration-150"
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous
              </button>
            )}

            {currentPage < totalPages ? (
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                className="relative inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out duration-150"
              >
                Next
                <svg
                  aria-hidden="true"
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <span className="relative inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg
                  aria-hidden="true"
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            )}
          </div>

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <div>
              <p className="font-normal text-gray-700 dark:text-gray-400 leading-5">
                Showing <span className="font-medium">{firstItem}</span> to{" "}
                <span className="font-medium">{lastItem}</span> of{" "}
                <span className="font-medium">{totalItems}</span> results
              </p>
            </div>

            <div>
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                {currentPage === 1 ? (
                  <span
                    aria-disabled="true"
                    aria-label="{{ __('pagination.previous') }}"
                  >
                    <span
                      className="relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-l-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                      aria-hidden="true"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                ) : (
                  <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    rel="prev"
                    className="relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-l-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  transition ease-in-out duration-150"
                    aria-label="{{ __('pagination.previous') }}"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                )}
                {currentPage > 3 ? (
                  <button
                    onClick={() => handlePageClick(1)}
                    className="relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    aria-label="{{ __('Go to page :page', ['page' => 1]) }}"
                  >
                    1
                  </button>
                ) : null}
                {currentPage > 4 ? (
                  <span
                    aria-disabled="true"
                    className="py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </span>
                ) : null}

                {/* all pages */}
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  if (page >= currentPage - 2 && page <= currentPage + 2) {
                    return page === currentPage ? (
                      <span
                        key={i}
                        aria-current="page"
                        className="relative inline-flex items-center py-2 px-3 leading-tight text-skin-600 bg-skin-50 border border-skin-300 cursor-pointer hover:bg-skin-100 hover:text-skin-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        {page}
                      </span>
                    ) : (
                      <button
                        key={i}
                        className="relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        aria-label={`Go to page ${page}`}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })}

                {currentPage < totalPages - 3 ? (
                  <span
                    aria-disabled="true"
                    className="py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </span>
                ) : null}
                {currentPage < totalPages - 2 ? (
                  <button
                    onClick={() => handlePageClick(totalPages)}
                    className="relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    aria-label="{{ __('Go to page :page', ['page' => totalPages]) }}"
                  >
                    {totalPages}
                  </button>
                ) : null}
                {currentPage < totalPages ? (
                  <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    rel="next"
                    className="relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-r-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  transition ease-in-out duration-150"
                    aria-label="{{ __('pagination.next') }}"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  <span aria-disabled="true" aria-label="pagination.next">
                    <span
                      className="relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-r-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                      aria-hidden="true"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                )}
              </span>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Pagination;


