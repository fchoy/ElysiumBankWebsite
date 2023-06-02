import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/navbar.css'
import NavbarBankImage from '../Images/newlogo.png';
import { Container, Image, NavDropdown, Navbar} from 'react-bootstrap';

const navbar = () => {
  return (
    <Navbar bg="light" variant='lg' className="col-auto h-auto">
      <Container className="row col-12 m-auto d-flex flex-lg-row flex-column justify-content-center align-items-center h-auto" fluid="true">

        <Navbar.Brand className="col-lg-4 col-auto d-flex flex-row justify-content-lg-end justify-content-center align-items-center">
          <Image src={NavbarBankImage} className="img-fluid" style={{height : "110px", width: "auto"}}/>
          <h1 className="" style={{}}>Elysium Bank</h1>
        </Navbar.Brand>

        <Container className='col-md-6 col-12 d-flex flex-lg-row flex-column justify-content-md-evenly justify-content-center align-items-center fw-semibold fs-5'> 

          <NavDropdown title='Personal' className="col-auto fs-5 p-2">
              <NavDropdown.Item href="/personal/checking" className="">Checking</NavDropdown.Item>
              <NavDropdown.Item href="/personal/savings">Savings</NavDropdown.Item>
              <NavDropdown.Item href="/personal/loans">Loans</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Businesses & Institutions' className="col-auto fs-5 text-center p-2">
            <NavDropdown.Item href="/business/loans">Loans</NavDropdown.Item>
            <NavDropdown.Item href="/business/accounting-services">Accounting Services</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='About Us' className="col-auto fs-5 col-auto p-2">
            <NavDropdown.Item href="/about-us/faq">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="/about-us/privacypolicy">Privacy Policy</NavDropdown.Item>
          </NavDropdown>

        </Container>

      </Container>
    </Navbar>

  )
}

export default navbar