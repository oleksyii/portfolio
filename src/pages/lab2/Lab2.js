import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserContext from '../../utils/UserProvider';
import Header from "../../utils/Header";
import TopNavbar from "../../utils/TopNavbar";
import NMTable from "./lab2Utils/NMTable";
import NMGraph2 from "./lab2Utils/NMGraph2";
import NMInputsSimpleExperts from "./lab2Utils/NMInputsSimpleExperts";
import NMInputsSimpleValues from "./lab2Utils/NMInputsSimpleValues";
import NMInfo from "./lab2Utils/NMInfo";

const Lab2 = () => {
    const expertEstimationsLocalHigh = [9, 7, 5, 3, 1, 1];
    const expertEstimationsLocalHighMedium = [7, 3, 1, 5, 9, 9];
    const tableValuesHigh = [60, 70 ,80, 90, 100, 110];
    const tableValuesLow = [110, 100 ,90, 80, 70, 60];
    const { expertEstimations, setExpertEstimations, lab2Values, setLab2Values } = useContext(UserContext);
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        // Simulate asynchronous events
        setTimeout(() => {
            setExpertEstimations(expertEstimationsLocalHigh);
            setLab2Values(tableValuesHigh);
            setLoading(false); // Set loading to false after events are completed
        }, 1000); // Adjust delay as needed
    }, []);

    function handleClickSetHigh() {
        setExpertEstimations(expertEstimationsLocalHigh);
        setLab2Values(tableValuesHigh);
    }

    function handleClickSetMedium() {
        setExpertEstimations(expertEstimationsLocalHighMedium);
        setLab2Values(tableValuesHigh);
    }

    function handleClickSetLow() {
        setExpertEstimations(expertEstimationsLocalHigh);
        setLab2Values(tableValuesLow);
    }

    return (
        <div>
            <TopNavbar />
            <Header title='Нечіткі множини' />
            <Container className="mb-4">
                <Row className='d-flex justify-content-start mb-4' lg={6}>
                    <Col lg={2}>
                        <Button className="mt-3" variant="success" type="submit" onClick={() => handleClickSetHigh()}>
                            Висока швидкість
                        </Button>
                    </Col>
                    <Col lg={2}>
                        <Button className="mt-3" variant="success" type="submit" onClick={() => handleClickSetMedium()}>
                            Середня швидкість
                        </Button>
                    </Col>
                    <Col lg={2}>
                        <Button className="mt-3" variant="success" type="submit" onClick={() => handleClickSetLow()}>
                            Низька Швидкість
                        </Button>
                    </Col>
                </Row>
                {!loading && (
                    <Row className='d-flex justify-content-center'>
                        <Col lg={3}>
                            <NMInputsSimpleValues />
                        </Col>
                        <Col lg={3}>
                            <NMInputsSimpleExperts values={tableValuesHigh}/>
                        </Col>
                        <Col lg={5}>
                            <NMTable  values={tableValuesHigh} />
                        </Col>
                    </Row>
                )}
            </Container>

            {!loading && (
                <>
                    <Container>
                        <Row className='d-flex justify-content-center'>
                            <Col lg={6}>
                                <NMGraph2 values={tableValuesHigh}/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-5">
                        <Row className='d-flex justify-content-center'>
                            <Col lg={6}>
                                <NMInfo />
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </div>
    );
}

export default Lab2;
