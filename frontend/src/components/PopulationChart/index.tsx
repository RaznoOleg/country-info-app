import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { PopulationData } from '@/types/countryInfo';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const PopulationChart = ({
  populationData,
}: {
  populationData: PopulationData[];
}) => {
  const chartData = {
    labels: populationData.map((data) => data.year),
    datasets: [
      {
        label: 'Population Over Time',
        data: populationData.map((data) => data.value),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index' as 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PopulationChart;
