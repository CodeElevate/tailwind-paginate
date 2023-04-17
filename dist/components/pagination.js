"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Pagination(_ref) {
  let {
    currentPage,
    pageSize,
    totalItems,
    onPageChange
  } = _ref;
  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = [];

  // Build an array of page numbers to display
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  function handlePageClick(pageNumber) {
    onPageChange(pageNumber);
  }
  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = Math.min(currentPage * pageSize, totalItems);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, totalPages > 0 ? /*#__PURE__*/_react.default.createElement("nav", {
    role: "navigation",
    "aria-label": "{{ __('Pagination Navigation') }}",
    className: "flex items-center justify-between my-4 not-prose"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between flex-1 md:hidden not-prose"
  }, currentPage === 1 ? /*#__PURE__*/_react.default.createElement("span", {
    className: "relative  inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "mr-2 w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  })), "Previous") : /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handlePageClick(currentPage - 1),
    className: "relative  inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out duration-150"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "mr-2 w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  })), "Previous"), currentPage < totalPages ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handlePageClick(currentPage + 1),
    className: "relative inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out duration-150"
  }, "Next", /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "ml-2 w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }))) : /*#__PURE__*/_react.default.createElement("span", {
    className: "relative inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-skin-base rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  }, "Next", /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "ml-2 w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex-1 md:flex md:items-center md:justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-gray-700 dark:text-gray-400 leading-5"
  }, "Showing ", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-medium"
  }, firstItem), " to", " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-medium"
  }, lastItem), " of", " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-medium"
  }, totalItems), " results")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "relative z-0 inline-flex shadow-sm rounded-md"
  }, currentPage === 1 ? /*#__PURE__*/_react.default.createElement("span", {
    "aria-disabled": "true",
    "aria-label": "{{ __('pagination.previous') }}"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-l-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  })))) : /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handlePageClick(currentPage - 1),
    rel: "prev",
    className: "relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-l-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  transition ease-in-out duration-150",
    "aria-label": "{{ __('pagination.previous') }}"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }))), currentPage > 3 ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handlePageClick(1),
    className: "relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    "aria-label": "{{ __('Go to page :page', ['page' => 1]) }}"
  }, "1") : null, currentPage > 4 ? /*#__PURE__*/_react.default.createElement("span", {
    "aria-disabled": "true",
    className: "py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  }, "...") : null, Array.from({
    length: totalPages
  }).map((_, i) => {
    const page = i + 1;
    if (page >= currentPage - 2 && page <= currentPage + 2) {
      return page === currentPage ? /*#__PURE__*/_react.default.createElement("span", {
        key: i,
        "aria-current": "page",
        className: "relative inline-flex items-center py-2 px-3 leading-tight text-skin-600 bg-skin-50 border border-skin-300 cursor-pointer hover:bg-skin-100 hover:text-skin-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      }, page) : /*#__PURE__*/_react.default.createElement("button", {
        key: i,
        className: "relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        "aria-label": "Go to page ".concat(page),
        onClick: () => handlePageClick(page)
      }, page);
    }
    return null;
  }), currentPage < totalPages - 3 ? /*#__PURE__*/_react.default.createElement("span", {
    "aria-disabled": "true",
    className: "py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  }, "...") : null, currentPage < totalPages - 2 ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handlePageClick(totalPages),
    className: "relative inline-flex items-center py-2 px-3 leading-tight text-gray-500 bg-skin-base border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    "aria-label": "{{ __('Go to page :page', ['page' => totalPages]) }}"
  }, totalPages) : null, currentPage < totalPages ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handlePageClick(currentPage + 1),
    rel: "next",
    className: "relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-r-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  transition ease-in-out duration-150",
    "aria-label": "{{ __('pagination.next') }}"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }))) : /*#__PURE__*/_react.default.createElement("span", {
    "aria-disabled": "true",
    "aria-label": "pagination.next"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "relative inline-flex items-center px-3 py-2 ml-0 leading-tight  text-gray-500 bg-skin-base border rounded-r-lg border-gray-300 cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))))))) : null);
}
var _default = Pagination;
exports.default = _default;