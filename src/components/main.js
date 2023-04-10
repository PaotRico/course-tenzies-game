import React from "react";
import Die from "./die.js";

export default function main() {
  return (
    <main className="main">
      <div className="game-space">
        <h1>Tenzies</h1>
        <p>
          Roll until dice are the same. Click each die to freeze it as its
          current value between rolls.
        </p>
        <div className="dice">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </div>
      </div>
    </main>
  );
}
