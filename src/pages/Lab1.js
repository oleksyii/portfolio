import React from 'react';
import TopNavbar from '../utils/TopNavbar';
import Tests from '../lab1/Tests';
import { Container, Row, Col } from 'react-bootstrap';
// import Temporary from '../utils/Temporary'

const Lab1 = () => {
    return ( 
        <div>
            <TopNavbar />
            <Container className='mt-3'>
                <Row className='d-flex justify-content-center '>
                    <Col lg={6}>
                        <h3 className='text-center'>Вітаю, пройдіть тест</h3>
                    </Col>
                </Row>
            </Container>
            <hr className="solid" />
            <Tests />
            {/* <Temporary /> */}
        </div>
     );
}
 
export default Lab1;