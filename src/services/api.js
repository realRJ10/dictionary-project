export const fetchWordData = async (word) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  if (!response.ok)
    throw new Error("Word not found. Please check the spelling.");
  const data = await response.json();
  return {
    word: data[0].word,
    phonetic: data[0].phonetics.find((p) => p.text)?.text || "",
    meanings: data[0].meanings,
  };
};
