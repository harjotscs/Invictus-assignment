import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import { calculateFrequencies, fetchData, sanitizeString } from "./helpers";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleClick = async (number) => {
    setLoading(true);
    let data = await fetchData(
      "https://raw.githubusercontent.com/invictustech/test/main/README.md"
    );
    data = sanitizeString(data);
    setTableData(calculateFrequencies(data).splice(0, number));
    setLoading(false);
  };

  return (
    <div className="container">
      <SearchBox handleClick={handleClick} isLoading={isLoading} />
      {tableData.length > 0 && <Table tableData={tableData} />}
    </div>
  );
}

export default App;
