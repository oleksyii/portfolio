import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup'
import { useNavigate } from 'react-router-dom';

import questions from '../data/questions';


const Tests = () => {
  const [answers, setAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const getRandomIndex = (maxIndex) => {
    return Math.floor(Math.random() * maxIndex);
  };

  useEffect(() => {
    const newSelectedOptions = questions.map((question, index) => {
      const randomIndex = Math.floor(Math.random() * question.options.length);
      return randomIndex;
    });
    console.log(newSelectedOptions);
    setSelectedOptions(newSelectedOptions);

    // Initialize an empty object to accumulate the updates
    const updatedAnswers = {};

    // Iterate over questions and update the corresponding answer
    questions.forEach((question, index) => {
        console.log('questions');
      updatedAnswers[`question${index + 1}`] =
        question.options[newSelectedOptions[index]].value;
    });

    // Update the answers state once with the final updatedAnswers object
    setAnswers({ ...answers, ...updatedAnswers });
    console.log(answers);
  }, []);

  const handleChange = (event, index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = parseInt(event.target.value);
    setSelectedOptions(newSelectedOptions);

    console.log(event.target);
    const { name, value, plevel } = event.target;
    setAnswers({ ...answers, [name]: parseInt(value) });
    console.log(answers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Initialize sums for each type
    const sumsByType = {};

    // Initialize sums for each type to 0
    questions.forEach((question) => {
      sumsByType[question.type] = 0;
    });

    // Calculate sums separately for each type
    questions.forEach((question, index) => {
      const answerValue = answers[`question${index + 1}`];
      sumsByType[question.type] += answerValue;
    });

    // Output sums for each type
    console.log("Sums by type:", sumsByType);

    // Redirect to another page/component with answers passed as state
    // history.push('/graphs', { sumsByType });
    navigate('/graphs', {state : sumsByType});
  };

  return (
    <Container className="">
      <Row className="d-flex justify-content-center ">
        <Col lg={6}>
          <Form action="graphs" className="mt-2" onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <Form.Group
                as={Row}
                controlId="formHorizontalEmail"
                className="mb-2"
              >
                <Form.Label column sm={6}>
                  <b style={{ color: "#595757" }}>{question.title}</b>
                </Form.Label>
                <Col sm={6}>
                  <Form.Select
                    aria-label="Default select example"
                    name={`question${index + 1}`}
                    value={selectedOptions[index]}
                    onChange={(event) => handleChange(event, index)}
                  >
                    {/* <option>Обрати</option> */}
                    {question.options.map((op) => (
                      <option value={op.value}>{op.key}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>
            ))}
            <hr className="solid" />

            <Form.Group as={Row}>
              <Col className="d-flex justify-content-center ">
                <Button type="submit" className="btn btn-dark">
                  Завершити
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
 
export default Tests;