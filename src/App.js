import { useEffect, useState } from "react";
import "./App.css";
import { Pagination } from "./lib";
import axios from "axios";
import Card from "./Card";
function App() {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(`https://api.punkapi.com/v2/beers`, {
          params: { page: currentPage, per_page: pageSize },
        });
        setBeers(response.data);
        // setTotalFollowers(response.data.totalItems);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBeers();
  }, [currentPage, pageSize]);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="p-12 theme-rose">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {beers.map((beer, i) => (
          <Card key={i} item={beer} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={40}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        disabledClassName=""
      />
    </div>
  );
}

export default App;
