import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  // transform array of dataPoint objects to array of number
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
 // biggest value across all months
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;