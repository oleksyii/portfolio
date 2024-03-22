// import RandomValueGenerator from "./RandomValueGenerator";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/index.umd"
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import UserContext from './UserProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'


const TopNavbar = () => {

    const { userName, updateUserName } = useContext(UserContext);

    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">Штучний Інтелект</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse-id" />
          <Navbar.Collapse id="navbar-collapse-id">
            <Nav>
              <NavDropdown
                title="Лабораторні"
                id="nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Header>Лабораторні роботи</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/lab1" eventKey="1">
                  Лаб 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/lab2" eventKey="2">
                  Лаб 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                title={`Вітаю вас, ${userName || 'Гість'}`}
                id="logout-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/" eventKey="1" onClick={() => updateUserName('')}>
                  <Container className="d-flex">
                    <Row className="d-flex">
                      <Col lg={1} className="ms-0 ps-0 "><FontAwesomeIcon icon={faRightFromBracket} className="align-self-end" /></Col>
                      <Col>Вихід</Col>
                    </Row>
                  </Container>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* Navbar.Brand, Navbar.Toggle, Navbar.Collapse, Navs, inline Forms, etc. */}
        </Container>
      </Navbar>

      //     <Navbar variant="dark" bg="dark" expand="lg">
      //     <Container fluid>
      //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      //       <Navbar.Toggle aria-controls="navbar-dark-example" />
      //       <Navbar.Collapse id="navbar-dark-example">
      //         <Nav>
      //           <NavDropdown
      //             id="nav-dropdown-dark-example"
      //             title="Dropdown"
      //             menuVariant="dark"
      //           >
      //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      //             <NavDropdown.Item href="#action/3.2">
      //               Another action
      //             </NavDropdown.Item>
      //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      //             <NavDropdown.Divider />
      //             <NavDropdown.Item href="#action/3.4">
      //               Separated link
      //             </NavDropdown.Item>
      //           </NavDropdown>
      //         </Nav>
      //       </Navbar.Collapse>
      //     </Container>
      //   </Navbar>
    );
}
 
export default TopNavbar;