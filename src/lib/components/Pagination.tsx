import React from "react";
import PaginationProps from "./PaginationProps";
import "./Pagination.css"
import "./Button"
import PaginationButton from "./Button";
/**
 * Pagination component for displaying page numbers and handling page changes.
 * @param {Object} props - The props object for the Pagination component.
 * @returns {JSX.Element} - The Pagination component.
 */

interface PaginationState {
  totalPages: number;
  pages: number[];
}
class Pagination extends React.Component<PaginationProps, PaginationState> {
  constructor(props: PaginationProps) {
    super(props);

    const { pageSize, totalItems } = props;

    this.state = {
      totalPages: Math.ceil(totalItems / pageSize),
      pages: [],
    };
  }

  componentDidMount() {
    this.updatePages();
  }

  componentDidUpdate(prevProps: PaginationProps) {
    if (
      prevProps.totalItems !== this.props.totalItems ||
      prevProps.pageSize !== this.props.pageSize
    ) {
      this.updatePages();
    }
  }

  updatePages() {
    this.buildPages();
  }

  buildPages() {
    const { totalItems, pageSize } = this.props;
    const totalPages = Math.ceil(totalItems / pageSize);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    this.setState({
      totalPages,
      pages,
    });
  }

  handlePageClick(pageNumber: number) {
    const { onPageChange } = this.props;
    onPageChange(pageNumber);
  }

  render() {
    const {
      currentPage = 1,
      pageCount = 10,
      pageRangeDisplayed = 6,
      marginPagesDisplayed = 2,
      previousLabel = <span>Previous</span>,
      nextLabel = <span>Next</span>,
      breakLabel = <span>...</span>,
      breakClassName,
      onPageChange,
      containerClassName,
      pageClassName,
      activeClassName,
      previousClassName,
      previousLinkClassName,
      nextClassName,
      disabledClassName,
      disabledLinkClassName,
      hideLegand = false,
      nextLinkClassName,
      pageSize,
      totalItems,
    } = this.props;

    const { totalPages, pages } = this.state;

    const firstItem = (currentPage - 1) * pageSize + 1;
    const lastItem = Math.min(currentPage * pageSize, totalItems);
    const pageRange: number = Math.min(totalPages, pageRangeDisplayed);
    const sidePages: number = Math.min(marginPagesDisplayed, pageRange - 2);
    const startPage: number = Math.max(2, currentPage - sidePages);
    const endPage: number = Math.min(totalPages - 1, currentPage + sidePages);


    return (
      <>
        {totalPages > 0 ? (
          <div
            role={'navigation'}
            aria-label={'Pagination Navigation'}
            className={containerClassName ?? 'tailwind-paginate pagination'}
          >
            <div className={'container-mobile'}>
              <PaginationButton
                disabled={currentPage === 1}
                onClick={() => this.handlePageClick(currentPage - 1)}
                className={previousClassName ?? 'relative  inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out duration-150'}
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
                {previousLabel}
              </PaginationButton>
              <PaginationButton
                disabled={currentPage >= totalPages}
                onClick={() => this.handlePageClick(currentPage + 1)}
                className={nextClassName ?? "relative inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out duration-150"}
              >
                {nextLabel}
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
              </PaginationButton>
            </div>
            <div className={'container-desktop'}>
              {hideLegand ? <div></div> :
                <div>
                  <p className="font-normal text-gray-700 dark:text-gray-400 leading-5">
                    Showing <span className="font-medium">{firstItem}</span> to{" "}
                    <span className="font-medium">{lastItem}</span> of{" "}
                    <span className="font-medium">{totalItems}</span> results
                  </p>
                </div>
              }
              <div className={'relative z-0 inline-flex shadow-sm rounded-md'}>
                <PaginationButton
                  onClick={() => this.handlePageClick(currentPage - 1)}
                  rel="prev"
                  className={previousLinkClassName ?? "relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-l-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  transition ease-in-out duration-150"}
                  aria-label="{{ __('pagination.previous') }}"
                  disabled={currentPage === 1}
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
                </PaginationButton>

                <PaginationButton
                  onClick={() => this.handlePageClick(1)}
                  className={pageClassName ?? "relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                  aria-label="Go to page :1"
                  show={startPage > 3}
                >
                  1
                </PaginationButton>
                <PaginationButton
                  show={startPage > 4}
                  aria-disabled="true"
                  className={breakClassName ?? "py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                >
                  {breakLabel}
                </PaginationButton>
                {/* all pages */}
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  if (page >= currentPage - 2 && page <= currentPage + 2) {
                    return <PaginationButton
                      key={i}
                      onClick={() => this.handlePageClick(page)}
                      className={pageClassName ?? "relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                      aria-label={`Go to page ${page}`}
                      disabled={page === currentPage}
                    >
                      {page}
                    </PaginationButton>
                  }
                  return null;
                })}
                <PaginationButton
                  show={endPage < totalPages - 3}
                  aria-disabled="true"
                  className={breakClassName ?? "py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                >
                  {breakLabel}
                </PaginationButton>
                <PaginationButton
                  onClick={() => this.handlePageClick(totalPages)}
                  className={pageClassName ?? "relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                  aria-label={`Go to page :${totalPages}`}
                  show={endPage < totalPages - 2}
                >
                  {totalPages}
                </PaginationButton>
                <PaginationButton
                  onClick={() => this.handlePageClick(currentPage + 1)}
                  rel="next"
                  className={nextLinkClassName ?? "relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-r-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  transition ease-in-out duration-150"}
                  aria-label="pagination.next"
                  disabled={currentPage >= totalPages}
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
                </PaginationButton>
              </div>


            </div>
          </div>
        ) : null}
        {/* className={activeClassName ?? "relative inline-flex items-center py-2 px-3 leading-tight text-skin-600 bg-skin-50 border border-skin-300 cursor-pointer hover:bg-skin-100 hover:text-skin-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white"} */}
                        
      </>
    );
  }
};

export default Pagination;

