import React from 'react';
import { Chart } from 'react-google-charts';
import { useState, useContext, useEffect } from "react";
import UserContex from '../../../utils/UserProvider';

const NMGraph = (props) => {
    const { results } = useContext(UserContex);
    const [values, setValues] = useState(props.values);
    const [chartData, setChartData] = useState([['Values', 'Results']]);

    useEffect(() => {
        // Create data array in the format required by Google Line Chart
        let chartDataTmp = [];
        for (let i = 0; i < values.length; i++) {
            chartDataTmp.push([values[i], results[i]]);
        }
        setChartData(chartData => chartData.concat(chartDataTmp));
    }, [results, values])

    return (
        <div>
            <Chart
                width={"100%"}
                height={"100%"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    title: 'Results vs Values',
                    hAxis: {
                        title: 'Values',
                    },
                    vAxis: {
                        title: 'Results',
                    },
                    pointSize: 5,
                    pointShape: 'circle',
                    legend: { position: 'none' }, // Hides the legend
                    chartArea: { width: '80%', height: '80%' }, // Adjust chart area
                }}
                rootProps={{ "data-testid": "1" }}
            />
        </div>
    );
}

export default NMGraph;
