import React from 'react';

function GameBoard({ letter, playerAnswers, handleInputChange }) {
  return (
    <div className="game-board">
      <h2>Category: {letter}</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={playerAnswers.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>
      <div>
        <label>Place: </label>
        <input
          type="text"
          value={playerAnswers.place}
          onChange={(e) => handleInputChange('place', e.target.value)}
        />
      </div>
      <div>
        <label>Animal: </label>
        <input
          type="text"
          value={playerAnswers.animal}
          onChange={(e) => handleInputChange('animal', e.target.value)}
        />
      </div>
      <div>
        <label>Thing: </label>
        <input
          type="text"
          value={playerAnswers.thing}
          onChange={(e) => handleInputChange('thing', e.target.value)}
        />
      </div>
    </div>
  );
}

export default GameBoard;
