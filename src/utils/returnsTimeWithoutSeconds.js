const returnsTimeWithoutSeconds = (unixTimeStamp = null) => {
  if (unixTimeStamp) {
    return Math.trunc(new Date(parseInt(unixTimeStamp)).getTime() / 1000);
  } else {
    return Math.trunc(new Date().getTime() / 1000);
  }
};

export { returnsTimeWithoutSeconds };
