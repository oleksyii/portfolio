import React from 'react';
import { Chart } from 'react-google-charts';
import { useLocation } from 'react-router-dom';



const MyGoogleChart = () =>  {
  const typesDictionary ={
    'Novice': 'Новачок',
    'Advanced beginner': 'Твердий початківець ',
    'Competent': 'Компетентний ',
    'Proficient': 'Досвідчений ',
    'Expert': 'Експерт '
  }

  
  const location = useLocation();
  console.log(location.state);
  const sumsByType  = location.state || {}; // Accessing answers from location.state
  
  // Find the key with the maximum value
  const maxKey = Object.keys(sumsByType).reduce((a, b) => sumsByType[a] > sumsByType[b] ? a : b);
  
  // Convert object into array of arrays
  const tableData = Object.entries(sumsByType).map(([proficiency, count]) => [
    proficiency,
    count,
  ]);
  
  return (
    <div>
      {console.log(typesDictionary[maxKey])}


      {/* data={[
          ["Програміст", "Кількість балів"],
          ["Новачок", 7],
          ["Твердий початківець", 2],
          ["Компетентний", 4],
          ["Досвідчений", 2],
          ["Експерт ", 14],
        ]} */}
      <Chart
        width={"800px"}
        height={"500px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[['Рівень', 'К-ть балів'], ...tableData]}
        options={{
          title: `Ваш тип програміста : ${maxKey}`,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
  
  export default MyGoogleChart;
  