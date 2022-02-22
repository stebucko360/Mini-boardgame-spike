import React, { useState, useEffect } from "react";
import { handleUserInput } from "../functionality/playerControl";
import { foodLocationSet } from "../functionality/foodGenerator";
import { handleGameOver } from "../functionality/handleGameOver";

const defaultBoardArray = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const GameBoard = ({ setScore, score }) => {
  const [gameBoardArray, setGameBoardArray] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);

  const [playerLocation, setPlayerLocation] = useState([5, 1]);
  const [foodLocation, setFoodLocation] = useState([5, 7]);
  const [tail, setTail] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const tailLocation = tail.slice(-score);
    for (let tailPieces of tailLocation) {
      if (tailPieces.toString() === playerLocation.toString()) {
        setGameOver(true);
      }
    }

    setGameBoardArray((currentArray) => {
      if (foodLocation.toString() === playerLocation.toString()) {
        setFoodLocation(foodLocationSet());
        setScore((currentValue) => {
          return (currentValue += 1);
        });
      }
      const newArray = JSON.parse(JSON.stringify(defaultBoardArray));
      newArray[playerLocation[0]][playerLocation[1]] = 2;
      newArray[foodLocation[0]][foodLocation[1]] = 3;

      if (score > 0) {
        for (let singleTailPiece of tailLocation) {
          newArray[singleTailPiece[0]][singleTailPiece[1]] = 2;
        }
      }
      return newArray;
    });
  }, [playerLocation]);

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={(event) =>
        handleUserInput(event, setPlayerLocation, setTail, tail)
      }
    >
      <div className="gameBoard">
        {gameOver ? (
          <div className="GameOverScreen">
            <h2>GameOver!</h2>
            <button
              onClick={() => {
                handleGameOver(
                  setGameBoardArray,
                  defaultBoardArray,
                  setPlayerLocation,
                  setFoodLocation,
                  setTail,
                  setGameOver,
                  setScore
                );
              }}
            >
              Start Over?
            </button>
          </div>
        ) : (
          gameBoardArray.map((array) => {
            return (
              <>
                {array.map((value) => {
                  if (value === 1) {
                    return <div className="borderPiece"></div>;
                  } else if (value === 0) {
                    return <div className="mainPiece"></div>;
                  } else if (value === 2) {
                    return <div className="playerLocation"></div>;
                  } else if (value === 3) {
                    return <div className="food"></div>;
                  }
                })}
              </>
            );
          })
        )}
      </div>
    </div>
  );
};
