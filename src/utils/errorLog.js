const errorLog = async (fileName, methodName, errorObject) => {
  const log = {
    path: `${fileName} - ${methodName}`,
    message: errorObject,
  };
  console.log(log);
};

export { errorLog };
