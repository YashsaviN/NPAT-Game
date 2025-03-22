import React from 'react';

function AIAnswers({ aiAnswers }) {
  return (
    <div className="ai-answers">
      <h3>AI's Answers:</h3>
      <p>Name: {aiAnswers.name}</p>
      <p>Place: {aiAnswers.place}</p>
      <p>Animal: {aiAnswers.animal}</p>
      <p>Thing: {aiAnswers.thing}</p>
    </div>
  );
}

export default AIAnswers;
