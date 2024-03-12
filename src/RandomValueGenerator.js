import React, {useState, useEffect} from "react";

const RandomValueGenerator = () => {

    const [randomValue, setRandomValue] = useState(generateRandomValue);

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setRandomValue(generateRandomValue);
        }, 5000);

        //Clear the interval
        return () => clearInterval(intervalId);
    }, []);

    function generateRandomValue() {
        return Math.random() * 10;
    };

    return (
        <div>
            <h1>Random Value: {randomValue}</h1>
        </div>
    );
};
 
export default RandomValueGenerator;