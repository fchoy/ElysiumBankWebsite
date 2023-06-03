import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/footer.css'

import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const footer = () => {
  return (
    <Container fluid="true" className="d-flex flex-lg-row flex-column mt-3 mb-3 justify-content-center align-items-center h-auto">

      <Row className="row col-lg-4 col-md-auto col-12 d-flex flex-column h-75 mb-lg-0 mb-5 footer-row m-auto">
        <Col className="col-auto text-center mb-2">Connect With Us</Col>
        <Col className="col-6 w-auto h-auto text-center d-flex flex-column flex-md-row justify-content-center align-items-center mb-md-0 mb-3">
          <i className="bi bi-facebook col-lg-2 col-12" style={{fontSize: "2rem"}}/>
          <i className="bi bi-instagram col-lg-2 col-12" style={{fontSize: "2rem"}}/>
          <i className="bi bi-twitter col-lg-2 col-12" style={{fontSize: "2rem"}}/>
        </Col>
      </Row>

      <Row className="row col-lg-4 col-12 d-flex flex-column m-auto mb-lg-0 mb-5 h-auto footer-row">
        <Col className="text-center mb-3">Sign-up For Our Newsletter</Col>
        <Col className="h-auto">
          <Form className="w-75 col-md-12 m-auto d-flex flex-row h-auto mb-md-0 mb-5">
            <Form.Control type="email" placeholder="example@gmail.com" classname="email-form" required/>
            <Button variant="primary" type="submit" className="w-auto" style={{marginLeft : "0.25rem"}}>Submit</Button>
          </Form>
        </Col>
      </Row>

      <Row className="row col-lg-4 col-auto d-flex flex-column justify-content-evenly align-items-center mb-lg-0 h-auto m-auto">
        <Col className="text-center d-flex flex-row w-auto justify-content-center align-items-center"><i className="bi bi-geo-alt-fill col-auto w-auto" ></i><p className="text-center m-auto col-12">3158 Pin Oak Drive, Santa Fe Springs, CA 90670</p></Col>
        <Col className="text-center d-flex flex-row w-auto m-auto justify-content-center align-items-center pt-lg-0 pt-2"><i class="bi bi-telephone-fill col-auto"></i><p className="text-center m-auto col-12">(562) 964-8122</p></Col>
        <Col className="text-center d-flex flex-row w-auto m-auto justify-content-center align-items-center pt-lg-0 pt-2"><i class="bi bi-envelope-at-fill col-auto"></i><p className="text-center m-auto col-12">Elysium@info.com</p></Col>
      </Row>
    </Container>
  )
}

export default footer