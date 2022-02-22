export const handleGameOver = (
  setGameBoardArray,
  defaultBoardArray,
  setPlayerLocation,
  setFoodLocation,
  setTail,
  setGameOver,
  setScore
) => {
  setGameBoardArray(defaultBoardArray);
  setPlayerLocation([5, 1]);
  setFoodLocation([5, 7]);
  setTail([]);
  setGameOver(false);
  setScore(0);
};
