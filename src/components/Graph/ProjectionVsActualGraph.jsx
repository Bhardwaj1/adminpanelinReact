import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels (months)
    datasets: [
      {
        label: 'Actuals',
        data: [12, 18, 17, 22, 11, 20], // Actuals data
        backgroundColor: 'rgba(168, 197, 218, 1)', // Darker blue color
        hoverBackgroundColor: 'rgba(168, 197, 218, 1)', // Same as background to remove hover effect
        borderWidth: 0,
        barThickness: 20,
      },
      {
        label: 'Projections',
        data: [3, 2, 1, 3, 3, 2], // Difference between projections and actuals (stacked on top)
        backgroundColor: 'rgba(168, 197, 218, 0.2)', // Lighter blue color
        hoverBackgroundColor: 'rgba(168, 197, 218, 0.2)', // Same as background to remove hover effect
        borderWidth: 0,
        borderRadius: {
            topLeft: 10,
            topRight: 10,
          },
          barThickness: 20,
      },
    ],
  };

  // Chart configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true, // Enable stacking on x-axis
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        stacked: true, // Enable stacking on y-axis
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light gray grid lines
        },
        ticks: {
          callback: function (value) {
            return value + 'M'; // Append 'M' for millions
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${context.dataset.label}: ${value}M`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '20px' }} className='bg-[#F7F9FB]'>
      <h3 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '10px' }}>
        Projections vs Actuals
      </h3>
      <div style={{ height: '300px', backgroundColor: '#F7F8FA', padding: '20px', borderRadius: '12px' }}>
        <Bar data={data} options={options} />
      </div>
      {/* Custom legend */}
      <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'rgba(168, 197, 218, 1)', marginRight: '5px' }}></div>
          <span>Actuals</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'rgba(168, 197, 218, 0.2)', marginRight: '5px' }}></div>
          <span>Projections</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
