export const handleUserInput = ({ keyCode }, setPlayerLocation) => {
  //right
  if (keyCode === 39) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[1] = copy[1] += 1;
      if (copy[1] !== 15) {
        return copy;
      } else return currvalue;
    });
    //left
  } else if (keyCode === 37) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[1] = copy[1] -= 1;
      if (copy[1] !== 0) {
        return copy;
      } else return currvalue;
    });
    //up
  } else if (keyCode === 38) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[0] = copy[0] -= 1;
      if (copy[0] !== 0) {
        return copy;
      } else return currvalue;
    });
    //down
  } else if (keyCode === 40) {
    setPlayerLocation((currvalue) => {
      const copy = [...currvalue];
      copy[0] = copy[0] += 1;
      if (copy[0] !== 10) {
        return copy;
      } else return currvalue;
    });
  }
};
