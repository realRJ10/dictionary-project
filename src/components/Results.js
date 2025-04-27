import Meaning from "./Meaning";

const Results = ({ wordData, error }) => {
  if (!wordData && !error) return null;

  return (
    <div id="result">
      {error ? (
        <div className="definition">{error}</div>
      ) : (
        <>
          <div className="word">{wordData.word}</div>
          <div className="phonetic">{wordData.phonetic}</div>
          {wordData.meanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </>
      )}
    </div>
  );
};

export default Results;
