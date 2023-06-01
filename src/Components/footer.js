import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/footer.css'

import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const footer = () => {
  return (
    <Container fluid="true" className="d-flex flex-sm-row flex-column mt-3 mb-3">
      <Row className="row col-4 d-flex flex-column h-75">
        <Col className="text-center mb-2">Connect With Us</Col>
        <Col className="w-auto h-auto text-center d-flex flex-column flex-sm-row justify-content-center align-items-center">
          <i className="bi bi-facebook col-2" style={{fontSize: "2rem"}}/>
          <i className="bi bi-instagram col-2" style={{fontSize: "2rem"}}/>
          <i className="bi bi-twitter col-2" style={{fontSize: "2rem"}}/>
        </Col>
      </Row>

      <Row className="row col-4 d-flex flex-column" style={{height : "fit-content"}}>
        <Col className="text-center mb-3">Sign-up For Our Newsletter</Col>
        <Col className="h-auto">
          <Form className="w-75 m-auto d-flex flex-row h-auto">
            <Form.Control type="email" placeholder="example@gmail.com" classname="email-form" required/>
            <Button variant="primary" type="submit" className="w-auto" style={{marginLeft : "0.25rem"}}>Submit</Button>
          </Form>
        </Col>
      </Row>

      <Row className="row col-4 d-flex flex-column">
        <Col className="text-center d-flex flex-row w-auto m-auto"><i className="bi bi-geo-alt-fill col-auto"></i><p className="col-11 col-sm-12">3158 Pin Oak Drive, Santa Fe Springs, CA 90670</p></Col>
        <Col className="text-center d-flex flex-row w-auto m-auto"><i class="bi bi-telephone-fill col-auto"></i><p className="col-11 col-sm-12">(562) 964-8122</p></Col>
        <Col className="text-center d-flex flex-row w-auto m-auto"><i class="bi bi-envelope-at-fill"></i><p className="col-11 col-sm-12">Elysium@info.com</p></Col>
      </Row>
    </Container>
  )
}

export default footer