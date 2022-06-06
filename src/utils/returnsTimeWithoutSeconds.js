const returnsTimeWithoutSeconds = (unixTimeStamp) => {
  return Math.trunc(new Date(parseInt(unixTimeStamp)).getTime() / 1000);
};

export { returnsTimeWithoutSeconds };
