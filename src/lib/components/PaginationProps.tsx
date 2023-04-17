interface PaginationProps {
    
   /**
   * The current page number
   */
    currentPage: number;

   /**
   * The number of items to display per page
   */
    pageSize: number,

   /**
   * The total number of items to paginate through
   */
    totalItems: number,

    /**
    * Callback function for when a new page is selected
    * @param page The new page number
    */
    onPageChange: (page: number) => void;
}

export default PaginationProps;