import "./App.css";
import React, { useEffect } from "react";
import Die from "./components/die.js";
import { nanoid } from "nanoid";

function App() {
  function allNewDice() {
    const diceValue = [];
    for (let i = 0; i < 10; i++) {
      diceValue.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceValue;
  }

  const [dice, setDice] = React.useState(() => allNewDice());
  const [tenzies, setTenzies] = React.useState(() => false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allValue = dice.every((die) => die.value === dice[0].value);
    if (allHeld && allValue) {
      console.log("Victory");
      setTenzies(true);
    }
  }, [dice]);

  const rollDice = () => {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld === false
            ? { ...die, value: Math.ceil(Math.random() * 6) }
            : die;
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  };

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
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
          {dice.map((die) => (
            <Die
              value={die.value}
              key={die.id}
              held={die.isHeld}
              holdDice={() => holdDice(die.id)}
            />
          ))}
        </div>
        <button onClick={rollDice}>{tenzies ? "New game" : "Roll"}</button>
      </div>
    </main>
  );
}

export default App;
