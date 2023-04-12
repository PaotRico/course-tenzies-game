import "./App.css";
import React from "react";
import Die from "./components/die.js";

function App() {
  function allNewDice() {
    const diceValue = [];
    for (let i = 0; i < 10; i++) {
      diceValue.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return diceValue;
  }

  const [allDice, setAllDice] = React.useState(() => allNewDice());

  function rollDice() {
    setAllDice(allNewDice());
  }

  return (
    <main className="main">
      <div className="game-space">
        <h1>Tenzies</h1>
        <p>
          Roll until dice are the same. Click each die to freeze it as its
          current value between rolls.
        </p>
        <div className="dice-container">
          {allDice.map((die) => (
            <Die value={die.value} />
          ))}
        </div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </main>
  );
}

export default App;
