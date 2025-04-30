import { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="container">
      <h1>Dictionary</h1>
      <Search setWordData={setWordData} setError={setError} />
      <Results wordData={wordData} error={error} />
      <footer>
        Coded by<strong> Mojdeh Khorsand Moghadam</strong> open sourced on
        <a
          href="https://github.com/realRJ10/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {} GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
