import { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import UserContex from '../../../utils/UserProvider';

const NMTable = (props) => {

    // const [expertEstimations, setExpertEstimatinos] = useState(props.estimations)
    // const [tableValues, setTableValues] = useState(props.values)
    const { expertEstimations, setResults, lab2Values: tableValues, setLab2Values: setTableValues } = useContext(UserContex);
    // const [tableValues, setTableValues] = useContext(UserContex);
    const [modifiedExpertEstimations, setModifiedExpertEstimations] = useState([0]); //or expertEstimations.concat([1]) 
    const [columnSums, setColumnSums] = useState([]);
    const [reversedColumnsSums, setReversedColumnsSums] = useState([]);
    const [noralizedSums, setNormalizedSums] = useState([]);
    const [tableValuesArray, setTableValuesArray] = useState([]);

    // The thing updates the actual data used for the table, when user changes them
    // in Input component
    useEffect(() => {
        console.log(expertEstimations);
        setModifiedExpertEstimations([...expertEstimations]);

    }, [expertEstimations]);


    // And this thing fires when the actual data is changed
    useEffect(() => {
        // Calculate the values inside the table
        let tableValuesTmpArr = [];
        for (let i = 0; i < modifiedExpertEstimations.length; i++) {
            let row = [];
            modifiedExpertEstimations.forEach(est => {
                row.push(est / modifiedExpertEstimations[i])
            });
            tableValuesTmpArr.push(row);
        }
        setTableValuesArray(tableValuesTmpArr);

        // Calculating intermediate data
        let columnSumsTmp = [];
        let reversedColumnsSumsTmp = [];
        let maxValue = 0;
        for (let j = 0; j < tableValuesTmpArr[0].length; j++) { // Iterate over columns
            let sum = 0;
            for (let i = 0; i < tableValuesTmpArr.length; i++) { // Iterate over rows
                sum += tableValuesTmpArr[i][j];
            }
            columnSumsTmp.push(sum);
            reversedColumnsSumsTmp.push(1 / sum);
            if (1 / sum > maxValue) maxValue = 1 / sum;
        }

        // Calculating result data
        let normalizedSumsTmp = [];
        reversedColumnsSumsTmp.forEach((el) => {
            normalizedSumsTmp.push(el / maxValue);
        })

        setNormalizedSums(normalizedSumsTmp);
        setReversedColumnsSums(reversedColumnsSumsTmp);
        setColumnSums(columnSumsTmp);

        console.log(modifiedExpertEstimations);
        console.log(normalizedSumsTmp);
        console.log(tableValues);

        // Passing result data to the chart
        setResults(normalizedSumsTmp);
    }, [modifiedExpertEstimations])

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {tableValues.map((op, index) => (
                            <th key={`col${index}`}>{op}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableValues.map((op, index) => (
                        <tr key={`row${index}`}>
                            <th>{op}</th>
                            {modifiedExpertEstimations.map((est, estIndex) => (
                                <td key={`col${index}-${estIndex}`}>{(est / modifiedExpertEstimations[index]).toFixed(5)}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th>1</th>
                        {columnSums.map((el, index) => (
                            <td key={`colSum${index}`}>{el.toFixed(5)}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>2</th>
                        {reversedColumnsSums.map((el, index) => (
                            <td key={`revColSum${index}`}>{el.toFixed(5)}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>M(x)</th>
                        {noralizedSums.map((el, index) => (
                            <td key={`normSum${index}`}>{el.toFixed(5)}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default NMTable;