import React, { useState } from "react";

import Box from "./Box";
import "../Styles/Main.css";
function Main() {
  let [player, setPlayer] = useState(1);
  let [status, setStatus] = useState(Array(9).fill(" "));
  let [winner, setWinner] = useState();
  function turn() {
    if (player == 1) return 1;
    else return 2;
  }
  function winStatus() {
    if (winner == `None`) return winner;
    else if (winner == 1) return `Player 1`;
    else return `Player 2`;
  }
  function reset() {
    setStatus(Array(9).fill(" "));
    setWinner();
    setPlayer(1);
  }
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <div className="turn-container">
        <h3>Player {player} turn</h3>
      </div>
      <div className="Container">
        <table>
          <tr>
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={0}
            />
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={1}
            />
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={2}
            />
          </tr>
          <tr>
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={3}
            />
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={4}
            />
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={5}
            />
          </tr>
          <tr>
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={6}
            />
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={7}
            />
            <Box
              setWinner={setWinner}
              status={status}
              setStatus={setStatus}
              player={player}
              setPlayer={setPlayer}
              num={8}
            />
          </tr>
        </table>
      </div>
      <div>
        {winner && (
          <div className="winner-section">
            <h3 className="winner-text">Winner is player {winner}</h3>
            <button onClick={reset}>Reset</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
