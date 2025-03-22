import React, { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import AIAnswers from './AIAnswers';
import Score from './Score';

function App() {
  // State to keep track of the current letter and answers
  const [letter, setLetter] = useState('');
  const [playerAnswers, setPlayerAnswers] = useState({
    name: '',
    place: '',
    animal: '',
    thing: ''
  });
  const [aiAnswers, setAiAnswers] = useState({
    name: '',
    place: '',
    animal: '',
    thing: ''
  });
  const [score, setScore] = useState(0);

  // Generate random letter
  const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  // AI answer generator
  const categories = {
    name: ['Alice', 'Aaron', 'Amelia', 'Adam'],
    place: ['Amsterdam', 'Australia', 'Africa', 'Athens'],
    animal: ['Aardvark', 'Antelope', 'Alligator', 'Armadillo'],
    thing: ['Apple', 'Antique', 'Axe', 'Anchor']
  };

  const getAIAnswer = (letter) => {
    return {
      name: categories.name.filter(name => name.startsWith(letter))[0],
      place: categories.place.filter(place => place.startsWith(letter))[0],
      animal: categories.animal.filter(animal => animal.startsWith(letter))[0],
      thing: categories.thing.filter(thing => thing.startsWith(letter))[0]
    };
  };

  // Handle the start of a new round
  const startRound = () => {
    const randomLetter = getRandomLetter();
    setLetter(randomLetter);
    setAiAnswers(getAIAnswer(randomLetter));
    setPlayerAnswers({
      name: '',
      place: '',
      animal: '',
      thing: ''
    });
  };

  // Handle player input change
  const handleInputChange = (category, value) => {
    setPlayerAnswers({ ...playerAnswers, [category]: value });
  };

  // Compare player and AI answers
  const compareAnswers = () => {
    let newScore = 0;
    for (let category in playerAnswers) {
      if (playerAnswers[category].toLowerCase() === aiAnswers[category].toLowerCase()) {
        newScore++;
      }
    }
    setScore(newScore);
  };

  return (
    <div className="App">
      <h1>Name, Place, Animal, Thing Game</h1>
      <button onClick={startRound}>Start Round</button>
      <GameBoard
        letter={letter}
        playerAnswers={playerAnswers}
        handleInputChange={handleInputChange}
      />
      <AIAnswers aiAnswers={aiAnswers} />
      <button onClick={compareAnswers}>Compare</button>
      <Score score={score} />
    </div>
  );
}

export default App;
