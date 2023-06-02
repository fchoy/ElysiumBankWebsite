import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/services.css'
import { Button, Col, Container, Row } from 'react-bootstrap';

const services = () => {
  return (
    <Container fluid="true" className="d-flex flex-column justify-content-center align-items-center border-top services-container h-auto">

        <Row className="col-lg-auto d-flex mb-3 mt-3 row">
            <Col><h1 className="text-center">Banking Made Easy with Elysium</h1></Col>
        </Row>

        <Row className="col-lg-6 col-auto d-flex flex-lg-row flex-column row mb-3">

            <Col className="col-lg-4 d-flex flex-column justify-content-center align-items-center services-col">
                <h4 className="mt-lg-0 mt-3 text-center">Book An Appointment</h4>
                <Button variant="link" href="/appointments" className="text-decoration-none text-center mb-lg-0 mb-3">Book an appointment with one of our professional bankers</Button>
            </Col>

            <Col className="col-lg-4 d-flex flex-column justify-content-center align-items-center services-col">
                <h4 className="mt-lg-0 mt-3 text-center">Online Services</h4>
                <Button variant="link" href="/online-services" className="text-decoration-none text-center mb-lg-0 mb-3">Let us help you find what you need</Button>
            </Col>

            <Col className="col-lg-4 d-flex flex-column justify-content-center align-items-center services-col">
                <h4 className="mt-lg-0 mt-3 text-center">Locate Us</h4>
                <Button variant="link" href="/locate" className="text-decoration-none text-center mb-lg-0 mb-3">Find a local ATM or branch</Button>
            </Col>        
        </Row>

    </Container>
  )
}

export default services