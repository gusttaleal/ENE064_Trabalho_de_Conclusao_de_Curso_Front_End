const errorLog = async (fileName, methodName, errorObject) => {
  // const errorReport = await errorObject.response.data;
  // if (errorReport) {
  //   const log = {
  //     path: `${fileName} - ${methodName}: ${errorReport.path}`,
  //     status: errorReport.status ?? 500,
  //     message: `${errorReport.message}`,
  //   };
  //   console.log(log);
  //   return JSON.stringify(log);
  // }

  const log = {
    path: `${fileName} - ${methodName}`,
    status: errorObject.status ? errorObject.status : 500,
    message: `${errorObject.message ?? null}`,
  };
  console.log(log);
  return JSON.stringify(log);
};

export { errorLog };
