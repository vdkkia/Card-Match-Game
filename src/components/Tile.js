import React from 'react';
import { icons } from '../Utils';

const Tile = (props) => {
  const { tile, status, onClick } = props;
  return (
    <button
      type="button"
      onClick={() => onClick(tile, status)}
      className={status}
    >
      <span
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          display: status !== 'available' ? 'inline' : 'none',
        }}
      >
        {icons[tile.value]}
      </span>
    </button>
  );
};

export default Tile;
