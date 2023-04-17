import React from "react";
interface PaginationProps {

    /**
    *  The current page number
    */
    currentPage: number;
    
    /**
    * The total number of pages to display
    */
    pageCount: number;
   
    /** 
    * The number of pages to display around the current page
    */
    pageRangeDisplayed: number;
    
    /**
    * The number of pages to display at the beginning and end of the pagination
    */
    marginPagesDisplayed: number;

    /**
    * The label for the "previous" button
    */
    previousLabel: Node;

    /** 
    * The label for the "next" button
    */
    nextLabel: Node;

    /**
    * The label for the "break" ellipsis
    */
    breakLabel: Node;

    /** 
    * The class name for the "break" 
    */
    breakClassName: string;

    /**
    * The class name for the "break" link element
    */
    breakLinkClassName: string;

    /**
    * Callback function for when a new page is selected
    * @param page The new page number
    */
    onPageChange: (page: number) => void;

    /** 
    * The class name for the pagination container element
    */
    containerClassName: string;

    /**
    * The class name for each page element
    */
    pageClassName: string;

    /**
    * The class name for each page link element
    */
    pageLinkClassName: string;

    /** 
    * The class name for the active page element
    */
    activeClassName: string;

    /**
    * The class name for the active page link element
    */
    activeLinkClassName: string;

    /**
    * The class name for the "previous" button element
    */
    previousClassName: string;

    /**
    * The class name for the "previous" button link element
    */
    previousLinkClassName: string;

    /**
    * The class name for the "next" button element
    */
    nextClassName: string;

    /**
    * The class name for the "next" button link element
    */
    nextLinkClassName: string;

    /**
    * The class name for disabled page elements and buttons
    */
    disabledClassName: string;

    /**
    * The class name for disabled page link elements and buttons
    */
    disabledLinkClassName: string;

    /**
    * Whether to hide disabled page elements and buttons
    */
    hideDisabled: boolean;

    /**
    * The number of items to display per page
    */
    pageSize: number,

    /**
    * The total number of items to paginate through
    */
    totalItems: number,

}
export default PaginationProps;