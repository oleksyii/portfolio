// import RandomValueGenerator from "./RandomValueGenerator";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/index.umd"
import Button from "react-bootstrap/Button"
import { Container, Row, Col, Navbar, Dropdown, DropdownButton, NavDropdown, Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import UserContext from './UserProvider';

const TopNavbar = () => {

    const { userName } = useContext(UserContext);

    return (
      // <div className="App">
      //     <div className="content">
      //         <div>{ title }</div>
      //     </div>
      // </div>

      // <RandomValueGenerator />

      //  <div className="container">
      //      <div className="row">
      //          <div className="col d-flex justify-content-center">
      //              <button type="button" className="btn btn-primary">Primary</button>
      //          </div>
      //      </div>
      //  </div>

      //  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //      <div className="container-fluid">
      //          <a className="navbar-brand" href="#">Navbar</a>
      //      </div>
      //  </nav>

      // <nav
      //     className="navbar navbar-expand-sm navbar-light bg-light "
      // >
      //     <div className="container-fluid">
      //         <a className="navbar-brand" href="#">AI & ML Labs</a>
      //         <button
      //             className="navbar-toggler d-lg-none"
      //             type="button"
      //             data-bs-toggle="collapse"
      //             data-bs-target="#collapsibleNavId"
      //             aria-controls="collapsibleNavId"
      //             aria-expanded="false"
      //             aria-label="Toggle navigation"
      //         >
      //             <span className="navbar-toggler-icon"></span>
      //         </button>

      //         <div className="collapse navbar-collapse myNavbar" id="collapsibleNavId">
      //             <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">

      //                 <li className="nav-item dropdown ">
      //                     <a
      //                         className="nav-link dropdown-toggle "
      //                         id="dropdownId"
      //                         data-bs-toggle="dropdown"
      //                         aria-haspopup="true"
      //                         aria-expanded="false"
      //                         >Tests</a
      //                     >
      //                     <div
      //                         className="dropdown-menu "
      //                         aria-labelledby="dropdownId"
      //                     >
      //                         <a className="dropdown-item" href="#"
      //                             >Lab 1</a
      //                         >
      //                     </div>
      //                 </li>
      //             </ul>

      //         </div>
      //     </div>
      // </nav>

      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Штучний Інтелект</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse-id" />
          <Navbar.Collapse id="navbar-collapse-id">
            <Nav>
              <NavDropdown
                title="Лабораторні"
                id="nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Header>Лабораторні роботи</NavDropdown.Header>
                <NavDropdown.Item href="/#" eventKey="1">
                  Лаб 1
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
               Вітаю вас, {userName || 'Гість'}
            </Navbar.Text>
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