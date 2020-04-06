import React from 'react';

const Replay = (props) => {
  const { newGame } = props;
  return (
    <button className="Button" onClick={newGame} type="button">
      Replay
    </button>
  );
};

export default Replay;
