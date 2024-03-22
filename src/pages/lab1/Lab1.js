import React, { useEffect, useState } from 'react';
import TopNavbar from '../../utils/TopNavbar';
import Tests from './lab1Utils/Tests';
import { Container, Row, Col } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
// import Temporary from '../utils/Temporary'

const Lab1 = () => {

    const {data: questions, isPending, error} = useFetch('http://localhost:8000/questions');

    return ( 
        <div>     
            <TopNavbar />
            <Container className='mt-3'>
                <Row className='d-flex justify-content-center '>
                    <Col lg={6}>
                        <h3 className='text-center'>Тест з визначення рівня програмістa</h3>
                    </Col>
                </Row>
            </Container>
            <hr className="solid" />
            {error && <div> {error} </div>}
            {isPending && <div>...is loading </div>}
            {questions && <Tests questions = {questions} />}
            {/* <Temporary /> */}
        </div>
     );
}
 
export default Lab1;