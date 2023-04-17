import "./App.css";
import { Pagination } from "./lib";

function App() {
  return (
    <>
      <Pagination
        currentPage={1}
        totalItems={10}
        pageSize={3}
        onPageChange={(page) => console.log(page)}
      />
    </>
  );
}

export default App;
