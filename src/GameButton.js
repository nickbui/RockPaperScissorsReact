import React from 'react';
import { Button } from '@material-ui/core';
import rockImage from "./Images/fist.png";
import paperImage from "./Images/hand.png";
import scissorsImage from "./Images/peace.png";
import './App.css';

// Function to create the gamebuttons
function GameButton() {

    const items = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * items.length);

    const myRockFunction = () => {
        const player = "Rock";
        const ai = (random, items[random]);
        document.getElementById('player_choice').innerHTML = "You chose: Rock";
        document.getElementById('ai_choice').innerHTML = "Opponent chose: " + ai;
        document.getElementById('result').innerHTML = winOrLose(player, ai);
    }

    const myPaperFunction = () => {
        const player = "Paper";
        const ai = (random, items[random]);
        document.getElementById('player_choice').innerHTML = "You chose: Paper";
        document.getElementById('ai_choice').innerHTML = "Opponent chose: " + ai;
        document.getElementById('result').innerHTML = winOrLose(player, ai);
    }

    const myScissorsFunction = () => {
        const player = "Scissors";
        const ai = (random, items[random]);
        document.getElementById('player_choice').innerHTML = "You chose: Scissors";
        document.getElementById('ai_choice').innerHTML = "Opponent chose: " + ai;
        document.getElementById('result').innerHTML = winOrLose(player, ai);
    }

    const winOrLose = (player, ai) => {
        if (player === ai) {
            return "Draw";
        } else if (player === "Rock" && ai === "Paper") {
            return "Opponent Won";
        } else if (player === "Rock" && ai === "Scissors") {
            return "Player Won";
        } else if (player === "Paper" && ai === "Scissors") {
            return "Opponent Won";
        } else if (player === "Paper" && ai === "Rock") {
            return "Player Won";
        } else if (player === "Scissors" && ai === "Paper") {
            return "Player Won";
        } else if (player === "Scissors" && ai === "Rock") {
            return "Opponent Won";
        } else {
            console.log("Something went wrong");
        }
    }

    return (
        <div className="game_button">
            <Button onClick={myRockFunction} id="rock_bttn" variant="contained" color="secondary" style={{ width: '398px', height: '433px' }}><img src={rockImage} alt="Rock" /></Button>
            <Button onClick={myPaperFunction} id="paper_bttn" variant="contained" color="secondary" style={{ width: '398px', height: '433px' }}><img src={paperImage} alt="Paper" /></Button>
            <Button onClick={myScissorsFunction} id="scissors_bttn" variant="contained" color="secondary" style={{ width: '398px', height: '433px' }}><img src={scissorsImage} alt="Scissors" /></Button>
        </div>
    );
}

export default GameButton;