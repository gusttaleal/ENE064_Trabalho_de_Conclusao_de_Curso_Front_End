import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';

const CustomChart = ({ chartData }) => <Line data={chartData} />;

CustomChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export { CustomChart };
