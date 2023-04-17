import { useState } from "react";
import "./App.css";
import { Pagination } from "./lib";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalItems={40}
        pageSize={3}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default App;
