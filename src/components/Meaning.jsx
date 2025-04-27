const Meaning = ({ meaning }) => {
  return (
    <div className="meaning">
      <div className="part-of-speech">{meaning.partOfSpeech}</div>
      {meaning.definitions.map((def, index) => (
        <div key={index}>
          <div className="definition">
            {index + 1}. {def.definition}
          </div>
          {def.example && <div className="example">"{def.example}"</div>}
        </div>
      ))}
    </div>
  );
};

export default Meaning;
