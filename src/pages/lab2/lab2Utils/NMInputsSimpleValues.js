import { useState, useEffect, useContext } from 'react';    
import UserContext from '../../../utils/UserProvider';
import { Container, Row, Col } from 'react-bootstrap';

const NMInputsSimple = (props) => {
    const [valuesLocal, setValuesLocal] = useState(props.values);
    const {lab2Values: values, setLab2Values: setValues} = useContext(UserContext);

    useEffect(()=>{
        console.log(values);
        console.log('From inside the inputs');
    }, [values])

    // Function to handle expertEstimations change
    const handleInputChange = (index, event) => {
        // console.log(index);
        // console.log(event.target.value);
        console.log(values);
        const newValues = [...values];
        newValues[index] = Number(event.target.value);
        setValues(newValues);
    };

    return ( 
        <div>
            <Container>
            {values.map((val, index) => (
                <Row key={`inputRow${index}`} className='d-flex justify-content-center '>
                    <Col lg={8}>
                    <p style={{ margin: '0' }}>Значення параметра {index} є</p>
                    </Col>
                    <Col lg={4}>
                    <input
                        type="text"
                        className="form-control"
                        id={`exampleFormControlInput${index + 1}`}
                        // defaultValue={values[index]}
                        value={values[index]}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    </Col>
                </Row>
            ))}
            </Container>
            
        </div>
     );
}
 
export default NMInputsSimple;