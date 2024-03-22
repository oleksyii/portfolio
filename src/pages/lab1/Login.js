import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../utils/UserProvider';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const { userName, updateUserName } = useContext(UserContext);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('the name is:' + userName);
        if (userName.trim() !== "") {
            navigate('/lab1')
        }
    }, [])

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        updateUserName(name);
        navigate('/lab1');
    };

    return (

        <Container className="d-flex justify-content-center align-content-center login-container">
            <Row className='align-content-center mb-5 pb-5'>
                <Col >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2" controlId="username">
                            <Form.Label>Введи своє ім'я</Form.Label>
                            <Form.Control type="text" placeholder="Ім'я" value={name} onChange={handleInputChange} />
                        </Form.Group>
                        <Button className="mt-3" variant="dark" type="submit">
                            Далі
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
}

export default Login;

