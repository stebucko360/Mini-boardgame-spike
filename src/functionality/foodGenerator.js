const numberGenerator = (axis) => {
  if (axis === "y") {
    return Math.random() * (9 - 1) + 1;
  } else {
    return Math.random() * (14 - 1) + 1;
  }
};

export const foodLocationSet = () => {
  return [Math.floor(numberGenerator("y")), Math.floor(numberGenerator("x"))];
};
