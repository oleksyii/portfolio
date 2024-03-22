import { useState, useContext } from "react";
import { Container, Row, Col ,Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import UserContex from '../../../utils/UserProvider';

const NMInputs = (props) => {

    const {expertEstimations, setExpertEstimations} = useContext(UserContex);
    const [modifiedExpertEstimations, setModifiedExpertEstimations] = useState([...expertEstimations, 1]); //or expertEstimations.concat([1]) 
    const [tableValues, setTableValues] = useState(props.values);

    const [inputValues, setInputValues] = useState([]);
    const [counter, setCounter] = useState(0);

    const handleAddEstimation = () => {
        setModifiedExpertEstimations([...modifiedExpertEstimations, 0]);
        setTableValues([...tableValues, 0]);
        // setCounter(counter + 1);
        console.log(counter);
    };

    const handleOnChange = (e) => {
        const temp = {};
        temp[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...temp });
    };

    return (
        <div>
            <Container className="mb-4">
                <Form>
                    <Form.Group as={Row} className="mb-3 d-flex justify-content-center " controlId="formPlaintextEmail">
                            <Col sm="4" className="d-flex justify-content-center ">
                                <Form.Label><b>Експертні оцінки</b></Form.Label>
                            </Col>
                            <Col sm="4" className="d-flex justify-content-center ">
                                <Form.Label><b>Значення</b></Form.Label>
                            </Col>
                        </Form.Group>
                    {modifiedExpertEstimations.map((est, index) => (
                        <Form.Group as={Row} className="mb-3 d-flex justify-content-center " controlId="formPlaintextEmail">
                            <Col sm="4">
                                <Form.Control type="text" defaultValue={est} />
                            </Col>
                            <Col sm="4">
                                <Form.Control type="text" defaultValue={tableValues[index]} />
                            </Col>
                        </Form.Group>
                    ))}
                </Form>

                {/* {Array.from(Array(counter)).map((c, index) => {
                return (
                    <input
                    onChange={handleOnChange}
                    key={c}
                    className={index}
                    type="text"
                    ></input>
                    );
                })} */}
                <Row>
                    <Col className="d-flex justify-content-center ">
                        <Button variant="dark" onClick={handleAddEstimation}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                </Row>
            </Container>

            {/* {Object.keys(expertEstimations).map((c) => {
                return <p>{expertEstimations[c]}</p>;
            })} */}


        </div>
    );
}

export default NMInputs;