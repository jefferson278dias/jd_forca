import './App.css';

//React
import { useCallback, useEffect, useState } from "react";

//components
import Componets from './componets/Componets';
import Gamer from './componets/Gamer';
import GamerOver from './componets/GamerOver';

//data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];
const guessesQty = 3;

function App() {
  const [gameStage, setGamestage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [palavrasWord, setPalavrasWord] = useState("");
  const [palavrasCategoria, setPalavrasCategoria] = useState("");
  const [letras, setLetras] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const [lastWrongWord, setLastWrongWord] = useState("");

  const palavrasEndCategoria = useCallback(() => {
    const categories = Object.keys(words);

    // Criando a categoria aleatória
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pegando a categoria e escolhendo a palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }, [words]);

  const startGame = useCallback(() => {
    clearLettersStates();

    const { word, category } = palavrasEndCategoria();

    // Separa as letras
    let wordSeparado = word.split("").map((l) => l.toLowerCase());

    setGamestage(stages[1].name);

    setPalavrasWord(word);
    setPalavrasCategoria(category);
    setLetras(wordSeparado);

  }, [palavrasEndCategoria]);

  const verifyLetter = (inputLetter) => {
    const normalizedLetras = inputLetter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetras) ||
      wrongLetters.includes(normalizedLetras)
    ) {
      return;
    }

    if (letras.includes(normalizedLetras)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetras,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetras,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };
  useEffect(() => {
    const uniqueLetters = [...new Set(letras)];
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((prevScore) => prevScore + 100);
      startGame();
    }
}, [guessedLetters, letras, startGame]); 


useEffect(() => {
  if (guesses <= 0) {
    clearLettersStates();
    setLastWrongWord(palavrasWord);
    setGamestage(stages[2].name);
  }
}, [guesses, palavrasWord]); 

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGamestage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <Componets startGame={startGame} />}
      {gameStage === "game" && (
        <Gamer
          verifyLetter={verifyLetter}
          palavrasCategoria={palavrasCategoria}
          palavrasWord={palavrasWord}
          letras={letras}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GamerOver retry={retry} score={score} lastWrongWord={lastWrongWord} />}
      
    </div>
  );
}

export default App;
