import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);



  function MyChart(props) {
    
    const data = {
        labels: props.yearData,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: props.color,
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: props.color,
            data: props.priceData
          }
        ]
      };

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false  
              }
            }
          ]
        },
        elements: {
          point: {
            radius: 0
          }
        }
      };
      
    return (
      <Line
        data={data}
        width={100}
        height={50}
        options={options}
      />      
    );
  }

  export default MyChart;