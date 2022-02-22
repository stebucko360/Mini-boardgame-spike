import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { ScoreBoard } from "./components/ScoreBoard";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <GameBoard setScore={setScore} score={score} />
      <ScoreBoard score={score} />
    </div>
  );
}

export default App;
