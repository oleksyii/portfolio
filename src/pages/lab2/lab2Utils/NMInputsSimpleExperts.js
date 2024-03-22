import { useState, useEffect, useContext } from 'react';    
import UserContext from '../../../utils/UserProvider';
import { Container, Row, Col } from 'react-bootstrap';

const NMInputsSimple = (props) => {
    // const [values, setValues] = useState(props.values);
    const {expertEstimations, setExpertEstimations, lab2Values: values, setLab2Values: setValues} = useContext(UserContext);
    const [modifiedExpertEstimations, setModifiedExpertEstimations] = useState([0]); //or expertEstimations.concat([1]) 

    useEffect(()=>{
        console.log(expertEstimations);
        setModifiedExpertEstimations([...expertEstimations]);
    }, [expertEstimations])

    // Function to handle expertEstimations change
    const handleInputChange = (index, event) => {
        // console.log(index);
        // console.log(event.target.value);
        const newExpertEstimations = [...expertEstimations];
        newExpertEstimations[index] = Number(event.target.value);
        setExpertEstimations(newExpertEstimations);
    };

    return ( 
        <div>
            <Container>
            {values.map((val, index) => (
                <Row key={`inputRow${index}`} className='d-flex justify-content-center '>
                    <Col lg={8}>
                    <p style={{ margin: '0' }}>Перевага {values[values.length - 1]} над {val} є</p>
                    </Col>
                    <Col lg={3}>
                    <input
                        type="text"
                        className="form-control"
                        id={`exampleFormControlInput${index + 1}`}
                        value={modifiedExpertEstimations[index]}
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