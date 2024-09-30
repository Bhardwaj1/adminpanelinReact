import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  // Data for the chart
  const data = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [
      {
        label: 'Total Sales',
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ['#000000', '#C5F3C5', '#A3B8FF', '#C5ECFF'], // Match colors
        hoverBackgroundColor: ['#000000', '#B8E0B8', '#92A8FF', '#B8E7FF'], // Hover effect colors
        borderWidth: 5, // Adds space between segments to match the white gap
        borderColor: '#FFFFFF', // White border between segments
      },
    ],
  };

  // Configuration options
  const options = {
    cutout: '65%', // Creates a thicker donut to match the image
    responsive: true,
    maintainAspectRatio: false, // Allows manual height control
    layout: {
      padding: {
        top: 20, // Space for title
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false, // No legend in the donut
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#2E2E2E', // Tooltip background color
        bodyColor: '#FFFFFF', // Tooltip text color
        borderColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toFixed(2)} (${tooltipItem.label})`;
          },
        },
      },
      // Custom plugin to add percentage text in the center of the donut
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        const centerText = '38.6%'; // Set the center text (static for now)
        const fontSize = (height / 114).toFixed(2);
        ctx.restore();
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';

        const textX = Math.round((width - ctx.measureText(centerText).width) / 2);
        const textY = height / 2;

        ctx.fillText(centerText, textX, textY);
        ctx.save();
      },
    },
  };

  return (
    <div style={{ maxWidth: '250px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ position: 'relative', height: '200px', width: '200px', margin: '0 auto' }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Data labels below the donut chart */}
      <div className="flex flex-col items-start mt-4">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center justify-between w-full text-sm font-medium">
            <div className="flex items-center">
              <span
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                className="w-3 h-3 inline-block rounded-full mr-2"
              ></span>
              <span>{label}</span>
            </div>
            <span>${data.datasets[0].data[index].toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
