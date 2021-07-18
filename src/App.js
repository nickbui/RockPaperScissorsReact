import './App.css';
import React from 'react';
import GameButton from "./GameButton";
import { Button } from '@material-ui/core';


function App() {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1 className="title">Rock,Paper, or Scissors?</h1>
      <GameButton />
      <h2 id="player_choice"></h2>
      <h2 id="ai_choice"></h2>
      <h2 id="result"></h2>
      <Button className="play_again" onClick={refreshPage} variant="outlined" color="secondary">Player Again?</Button>
    </div>
  );
}

export default App;
