import React, { useState } from "react";

import "./App.css";

const choices = ["pedra", "papel", "tesoura"];

const playGame = (userChoice, setUserChoice, setComputerChoice, setResult) => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  setUserChoice(userChoice);
  setComputerChoice(computerChoice);

  if (userChoice === computerChoice) {
    setResult("Empate!");
  } else if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    setResult("Você venceu!");
  } else {
    setResult("Você perdeu!");
  }
};

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    playGame(choice, setUserChoice, setComputerChoice, setResult);
  };

  return (
    <div className="App">
      <h1> Jogo de Jokenpô </h1>{" "}
      <div className="choices">
        {" "}
        {choices.map((choice) => (
          <button
            key={choice}
            className="btn btn-primary"
            onClick={() => handleUserChoice(choice)}
          >
            {choice}{" "}
          </button>
        ))}{" "}
      </div>{" "}
      {userChoice && computerChoice && result && (
        <div className="result">
          <p> Sua escolha: {userChoice} </p>{" "}
          <p> Escolha do computador: {computerChoice} </p>{" "}
          <p> Resultado: {result} </p>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default App;
