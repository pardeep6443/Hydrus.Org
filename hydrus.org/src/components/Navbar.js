import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar1 = () =>{
    return(
<div id="navbar">
      {['md' ].map((expand) => (
        <div className='header'>
        <Navbar key={expand} expand={expand} className="bg smb-2">
          <Container fluid>
            <Navbar.Brand href="#" className='logo'>Hydrus.Org</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
             style={{backgroundColor:"#41424C"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{color:"white"}}>
                 Hydrus.Org
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navbar">

                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/">WORK</Nav.Link>
                  <Nav.Link href="/">SERVICES</Nav.Link>
                  <Nav.Link href="/">ABOUT</Nav.Link>
                  <Nav.Link href="/">CONTACT</Nav.Link>
          
                </Nav>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        
        </Navbar>
        </div>
      ))}
    </div>
    )
}
export default Navbar1;