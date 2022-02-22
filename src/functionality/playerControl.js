export const handleUserInput = ({ keyCode }, setPlayerLocation) => {
  if (keyCode === 39) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[1] = copy[1] += 1;
      return copy;
    });
  } else if (keyCode === 37) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[1] = copy[1] -= 1;
      return copy;
    });
  } else if (keyCode === 38) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[0] = copy[0] -= 1;
      return copy;
    });
  } else if (keyCode === 40) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[0] = copy[0] += 1;
      return copy;
    });
  }
};
