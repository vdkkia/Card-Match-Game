import React, { useState, useEffect } from 'react';
import './App.css';
import Tile from './components/Tile';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import { Utils } from './Utils';

const gameType = {
  small: { size: 30, time: 99 },
  big: { size: 70, time: 199 },
};
let gameTime = gameType.small.time;
let tiles = Utils.Generate(30);

const Game = (props) => {
  const [usedTiles, setUsedTiles] = useState([]);
  const [selectedTile, setSelectedTile] = useState('');
  const [boarderSize, setBoarderSize] = useState('SMALL');
  const { remaining, newGame } = props;
  const tileClick = (tile, status) => {
    if (status === 'available' && remaining > 0) {
      if (selectedTile.value === tile.value) {
        setUsedTiles([...usedTiles, selectedTile, tile]);
        setSelectedTile('');
      } else {
        setSelectedTile(tile);
      }
      // if (usedTiles.length === tiles.length) setRemaining(-1);
    }
  };

  const tileStatus = (tile) => {
    if (selectedTile === tile) return 'selected';
    if (usedTiles.includes(tile)) return 'unavailable';
    return 'available';
  };
  const changeSize = (e) => {
    if (e.target.value === 'SMALL') {
      setBoarderSize('SMALL');
      tiles = Utils.Generate(gameType.small.size);
      gameTime = gameType.small.time;
    } else {
      setBoarderSize('BIG');
      tiles = Utils.Generate(gameType.big.size);
      gameTime = gameType.big.time;
    }
    newGame();
  };

  return (
    <div className="App">
      <div
        className={`Boarder ${
          tiles.length > 42 ? 'largeBoarder' : 'smallBoarder'
        }`}
      >
        <div className="Tiles">
          {tiles.map((x) => (
            <Tile
              key={x.id}
              tile={x}
              onClick={tileClick}
              status={tileStatus(x)}
            />
          ))}
        </div>
        <Footer
          newGame={newGame}
          gameOver={remaining === 0}
          won={usedTiles.length === tiles.length}
          remaining={remaining}
        />
      </div>
      <SideBar
        setBoarderSize={setBoarderSize}
        boarderSize={boarderSize}
        changeSize={changeSize}
      />
    </div>
  );
};

const MyGame = () => {
  const [remaining, setRemaining] = useState(gameTime);
  const [gameId, setGameId] = useState(1);
  const newGame = () => {
    setGameId(gameId + 1);
    setRemaining(gameTime);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (remaining > 0) {
        setRemaining(remaining - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <Game
      key={gameId}
      remaining={remaining}
      setRemaining={setRemaining}
      newGame={newGame}
    />
  );
};

export default MyGame;
