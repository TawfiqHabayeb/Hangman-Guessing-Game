import { useState, useEffect } from "react";

interface Word {
  word: string;
}

const MainBody = () => {
  const [error, setError] = useState<Error | null>(null);
  const [word, setWord] = useState<string>("");

  const fetchWords = () => {
    fetch("https://api.datamuse.com/words?sp=?????&max=1000")
      .then((response) => response.json())
      .then((res: Word[]) => {
        const randomIndex = Math.floor(Math.random() * res.length);
        setWord(res[randomIndex].word);
      })

      .catch((err: Error) => setError(err));
  };

  useEffect(() => {
    fetchWords();
    console.log(word);
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1> Guess the word</h1>
        <div className="content">
          <div className="inputs">
            <input type="text" disabled />
            <input type="text" disabled />
            <input type="text" disabled />
            <input type="text" disabled />
            <input type="text" disabled />
            <input type="text" disabled />
          </div>
          <div className="details">
            <p className="hint">
              Hint: <span> Hints will be shown here</span>
            </p>
            <p className="left-guess">
              Remaining guesses: <span> 10</span>
            </p>
            <p className="wrong-letter">
              Wrong letter: <span> a, b, c, d</span>
            </p>
          </div>
          <button className="resetBtn">Reset Game</button>
        </div>
      </div>
    </>
  );
};

export default MainBody;
