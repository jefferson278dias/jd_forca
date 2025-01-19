<<<<<<< HEAD
import "./GamerOver.css";

const GamerOver = ({ retry, score, lastWrongWord }) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      {lastWrongWord && (
        <h3>A palavra correta era: <span>{lastWrongWord}</span></h3>
      )}
      <button onClick={retry}>Começar o jogo</button>
    </div>
  );
};

export default GamerOver;
=======
import "./GamerOver.css";

const GamerOver = ({ retry, score, lastWrongWord }) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      {lastWrongWord && (
        <h3>A palavra correta era: <span>{lastWrongWord}</span></h3>
      )}
      <button onClick={retry}>Começar o jogo</button>
    </div>
  );
};

export default GamerOver;
>>>>>>> 0593c20d3c51439f8f2787abe2575513382052e1
