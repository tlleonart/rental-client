import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const DChart = ({ chartData, titleText }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: titleText
            },
            legend: {
              display: true,
              position: 'top'
            }
          }
        }}
      />
    </>
  )
}
