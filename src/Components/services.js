import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/services.css'
import { Col, Container, Row } from 'react-bootstrap';

const services = () => {
  return (
    <Container fluid="true" className="d-flex flex-column justify-content-center align-items-center border-top services-container" style={{height : "300px"}}>
        <Row className="col-lg-auto d-flex row mb-3">
            <Col><h1>Banking Made Easy with Elysium</h1></Col>
        </Row>

        <Row className="col-lg-6 d-flex row">

            <Col className="col-lg-4 d-flex flex-column justify-content-center align-items-center services-col" style={{height : "150px"}}>
                <h4 className="" style={{height : "fit-content"}}>Book An Appointment</h4>
                <a href="/appointments" className="text-decoration-none" style={{height : "fit-content", textAlign : "center"}}>Book an appointment with one of our professional bankers</a>
            </Col>

            <Col className="col-lg-4 d-flex flex-column justify-content-center align-items-center services-col" style={{height : "150px"}}>
                <h4 className="" style={{height : "fit-content"}}>Online Services</h4>
                <a href="/online-services" className="text-decoration-none" style={{height : "fit-content", textAlign : "center"}}>Let us help you find what you need</a>
            </Col>

            <Col className="col-lg-4 d-flex flex-column justify-content-center align-items-center services-col" style={{height : "150px"}}>
                <h4 className="" style={{height : "fit-content"}}>Locate Us</h4>
                <a href="/locate" className="text-decoration-none" style={{height : "fit-content", textAlign : "center"}}>Find a local ATM or branch</a>
            </Col>        
        </Row>

    </Container>
  )
}

export default services