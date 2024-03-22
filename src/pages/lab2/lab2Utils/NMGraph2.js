import React from 'react';
import { useState, useContext, useEffect } from "react";
import UserContex from '../../../utils/UserProvider';
import CanvasJSReact from '@canvasjs/react-charts';

const NMGraph = (props) => {
    const { results, lab2Values: values } = useContext(UserContex);
    // const [values, setValues] = useState(props.values);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Create data array in the format required by CanvasJS
        let dataPoints = [];
        for (let i = 0; i < values.length; i++) {
            dataPoints.push({ x: values[i], y: results[i] * 100 });
        }
        setChartData([{ type: "line", toolTipContent: "{x}: {y}%", dataPoints, lineColor: "green", markerColor: "green"  }]);
    }, [results, values])

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    return (
        <div>
            <CanvasJSChart
                options={{
                    animationEnabled: true,
                    exportEnabled: true,
                    theme: "light2",
                    title: { text: "Відповідність параметрів" },
                    axisY: { title: "Відповідність", suffix: "%" },
                    axisX: { title: "Значення" },
                    data: chartData
                }}
            />
        </div>
    );
}

export default NMGraph;
