import React, { useState, useEffect } from "react";
import { handleUserInput } from "../functionality/playerControl";

const defaultBoardArray = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
];

export const GameBoard = () => {
  const [gameBoardArray, setGameBoardArray] = useState([
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ]);

  const [playerLocation, setPlayerLocation] = useState([5, 1]);

  useEffect(() => {
    setGameBoardArray((currentArray) => {
      const newArray = JSON.parse(JSON.stringify(defaultBoardArray));
      newArray[playerLocation[0]][playerLocation[1]] = 2;
      return newArray;
    });
  }, [playerLocation]);

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={(event) => handleUserInput(event, setPlayerLocation)}
    >
      <div className="gameBoard">
        {gameBoardArray.map((array) => {
          return (
            <>
              {array.map((value) => {
                if (value === 1) {
                  return <div className="borderPiece"></div>;
                } else if (value === 0) {
                  return <div className="mainPiece"></div>;
                } else if (value === 2) {
                  return <div className="playerLocation"></div>;
                }
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};
