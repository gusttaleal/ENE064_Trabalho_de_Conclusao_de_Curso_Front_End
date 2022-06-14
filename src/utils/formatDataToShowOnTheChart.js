const formatDataToShowOnTheChart = (data, size = null) => {
  const labels = data.map((data) => data.transmittedDataAt);
  const values = data.map((data) => data.transmittedData);

  if (size) {
    const isDataLenghtBiggerThanSize = data.length > size;
    if (isDataLenghtBiggerThanSize) {
      const fitDataSize = data.length - size;
      return {
        labels: labels.filter((label, index) => index >= fitDataSize),
        datasets: [{ label: 'Dados', data: values.filter((value, index) => index >= fitDataSize) }],
      };
    }
  }

  return {
    labels: labels,
    datasets: [{ label: 'Dados', data: values }],
  };
};

export { formatDataToShowOnTheChart };
