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
    previousLabel?: React.ReactNode;

    /** 
    * The label for the "next" button
    */
    nextLabel?: React.ReactNode;

    /**
    * The label for the "break" ellipsis
    */
    breakLabel?: React.ReactNode;

    // brealAriaLabel?: string;

    /** 
    * The class name for the "break" 
    */
    breakClassName?: string;

    /**
    * The class name for the "break" link element
    */
    breakLinkClassName?: string;

    /** 
    * The class name for the pagination container element
    */
    containerClassName?: string;

    /**
    * The class name for each page element
    */
    pageClassName?: string;

    /**
     * The class name for each page link element
     */
    pageLinkClassName?: string;

    /** 
    * The class name for the active page element
    */
    activeClassName?: string;

    /**
    * The event to listen to before changing the selected page
    * Default value: "onClick"
    */
    eventListener?: string;

    /**
    * The rel property on the <a> tag for the previous page control
    * Default value: "prev"
    * Set to null to disable
    */
    prevRel?: string | null;

    /**
     * The class name for the active page link element
     * @deprecated Use activeClassName instead
     * @see activeClassName
     */
    activeLinkClassName?: string;

    /**
    * The class name for the "previous" button element
    */
    previousClassName?: string;

    /**
    * The class name for the "previous" button link element
    */
    previousLinkClassName?: string;

    /**
    * The class name for the "next" button element
    */
    nextClassName?: string;

    /**
    * The class name for the "next" button link element
    */
    nextLinkClassName?: string;

    /**
    * The class name for disabled page elements and buttons
    */
    disabledClassName?: string;

    /**
    * The class name for disabled page link elements and buttons
    */
    disabledLinkClassName?: string;

    /**
    * Control the visibility of a legend or label that describes the pagination
    */
    hideLegand: boolean;

    /**
    * The number of items to display per page
    */
    pageSize: number,

    /**
    * The total number of items to paginate through
    */
    totalItems: number,

    /**
    * The number of pages to display in the navigation before displaying ellipsis
    */
    maxDisplayedPages?: number;

    /**
     * The maximum number of items to display in the pagination component
     */
    maxItems?: number;

    /**
     * Show or hide the previous and next buttons
     */
    showPreviousNextButtons?: boolean;

    /**
     * Show or hide the first and last buttons
     */
    showFirstLastButtons?: boolean;

    /**
     * The label for the "first" button
     */
    firstLabel?: React.ReactNode;

    /**
     * The label for the "last" button
     */
    lastLabel?: React.ReactNode;

    /**
     * The class name for the "first" button element
     */
    firstClassName?: string;

    /**
     * The class name for the "first" button link element
     */
    firstLinkClassName?: string;

    /**
     * The class name for the "last" button element
     */
    lastClassName?: string;

    /**
     * The class name for the "last" button link element
     */
    lastLinkClassName?: string;

    /**
     * The class name for the custom navigation container
     */
    customNavContainerClassName?: string;

    /**
     * The class name for the custom navigation element
     */
    customNavElementClassName?: string;

    /**
     * The class name for the custom navigation active element
     */
    customNavActiveElementClassName?: string;

    /**
     * The class name for the custom navigation disabled element
     */
    customNavDisabledElementClassName?: string;

    /**
     * The class name for the custom navigation previous element
     */
    customNavPreviousElementClassName?: string;

    /**
     * The class name for the custom navigation next element
     */
    customNavNextElementClassName?: string;

    /**
     * Customize the navigation labels and their respective page numbers
     */
    customNavLabels?: { [label: string]: number };

    /**
     * Show or hide the jump to first and jump to last buttons
     */
    showJumpToFirstLastButtons?: boolean;

    /**
     * The label for the "jump to first" button
     */
    jumpToFirstLabel?: React.ReactNode;

    /**
     * The label for the "jump to last" button
     */
    jumpToLastLabel?: React.ReactNode;

    /**
    * Callback function for when a new page is selected
    * @param page The new page number
    */
    onPageChange: (page: number) => void;

    /**
    * Callback function for when an active page is clicked
    * @param page The active page object
    */
    onPageActive?: (page: number) => void;

    /**
    * Function called to generate the href attribute value on each page element's link
    * @param page The page number
    * @returns The href attribute value
    */
    hrefBuilder?: (page: number) => string;

    /**
    * Function to set the text on page links
    * @param page The page number
    * @returns The label for the page link
    */
    pageLabelBuilder?: (page: number) => React.ReactNode;
    
    /**
    * Function called to generate the aria-label attribute value on each page link
    * @param page The page number
    * @returns The aria-label attribute value
    */
    ariaLabelBuilder?: (page: number) => string;

    /**
    * Callback function for when the page size is changed
    * @param pageSize The new page size
    */
    onPageSizeChange?: (pageSize: number) => void;

}
export default PaginationProps;