import React from 'react';
import Replay from './Replay';
import Win from './Win';

const Footer = (props) => {
  const { newGame, won, remaining, gameOver } = props;
  return (
    <div
      className={`Footer ${
        remaining < 11 && remaining > 0 && !won ? 'blink' : ''
      }`}
    >
      {gameOver && (
        <>
          Game Over!
          <Replay newGame={newGame} />
        </>
      )}
      {won && (
        <>
          <Win />
          <Replay newGame={newGame} />
        </>
      )}
      {!gameOver && !won && `Remaining time: ${remaining}`}
    </div>
  );
};

export default Footer;
