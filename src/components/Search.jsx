import { useState } from "react";
import { fetchWordData } from "../services/api";

const Search = ({ setWordData, setError }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    if (!inputValue.trim()) return;

    try {
      const data = await fetchWordData(inputValue);
      setWordData(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setWordData(null);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a word"
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
