import { useState } from "react";
import "./App.css";
import { Pagination } from "./lib";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="p-12 theme-rose">
      <Pagination
        currentPage={currentPage}
        totalItems={40}
        pageSize={3}
        onPageChange={handlePageChange}
        disabledClassName=""
      />
    </div>
  );
}

export default App;
