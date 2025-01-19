<<<<<<< HEAD
import { useState, useRef} from "react";
import "./Gamer.css";

const Gamer = ({
  verifyLetter,
  palavrasCategoria,
  palavrasWord,
  letras: letrasProp, // Renomeando para evitar conflito
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letra, setLetra] = useState(""); // Nome do estado alterado para "letra"
  const letrasInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letra);
    setLetra(""); // Limpar o campo após o envio
    letrasInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="Point">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe qual a palavra:</h1>
      <h3 className="tip">
        Dica da palavra: <span>{palavrasCategoria}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letrasProp.map((letra, i) => (
          guessedLetters.includes(letra) ? (
            <span key={i} className="letras">
              {letra}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letraContainer">
        <p>Tente adivinhar a letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letra"
            maxLength="1"
            required
            onChange={(e) => setLetra(e.target.value)}
            value={letra}
            ref={letrasInputRef}
          />
          <button type="submit">Jogar!</button>
        </form>
      </div>
      <div className="palavrasDigitadasConatainer">
        <p>Letras erradas:</p>
        {wrongLetters.map((letraErrada, i) => (
          <span key={i}>{letraErrada}, </span>
        ))}
      </div>
    </div>
  );
};

export default Gamer;
=======
import { useState, useRef} from "react";
import "./Gamer.css";

const Gamer = ({
  verifyLetter,
  palavrasCategoria,
  palavrasWord,
  letras: letrasProp, // Renomeando para evitar conflito
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letra, setLetra] = useState(""); // Nome do estado alterado para "letra"
  const letrasInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letra);
    setLetra(""); // Limpar o campo após o envio
    letrasInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="Point">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe qual a palavra:</h1>
      <h3 className="tip">
        Dica da palavra: <span>{palavrasCategoria}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letrasProp.map((letra, i) => (
          guessedLetters.includes(letra) ? (
            <span key={i} className="letras">
              {letra}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letraContainer">
        <p>Tente adivinhar a letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letra"
            maxLength="1"
            required
            onChange={(e) => setLetra(e.target.value)}
            value={letra}
            ref={letrasInputRef}
          />
          <button type="submit">Jogar!</button>
        </form>
      </div>
      <div className="palavrasDigitadasConatainer">
        <p>Letras erradas:</p>
        {wrongLetters.map((letraErrada, i) => (
          <span key={i}>{letraErrada}, </span>
        ))}
      </div>
    </div>
  );
};

export default Gamer;
>>>>>>> 0593c20d3c51439f8f2787abe2575513382052e1
