import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/topnavbar.css'
import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap';

const topnavbar = () => {
  return (
    <Container fluid="true" className="w-auto top-nav-container d-flex justify-content-end mb-3">
        <Navbar className='col-sm-5 row d-flex flex-lg-row flex-column justify-content-lg-evenly justify-content-center align-items-center m-lg-0 m-auto'>

            <Nav.Item className="col-lg-3 col-auto row"><Button type="button" variant="outline-light" className="col-lg-auto btn-link text-decoration-none mt-auto mb-auto topnavbar-button" href="/login">Login</Button></Nav.Item>

            <Nav.Item className="col-lg-3 col-auto row"><Button type="button" variant="outline-light" className="col-lg-auto btn-link text-decoration-none mt-auto mb-auto topnavbar-button" href="/register">Register</Button></Nav.Item>

            <Nav.Item className="col-lg-6 col-12 row">
                <Form className="d-flex h-100 mt-auto mb-auto">
                      <input type="text" id="search" placeholder='Search' className="form-control h-75 mt-auto mb-auto"/>
                      <button type="submit" className="col-lg-auto btn h-75 d-flex align-items-center mt-auto mb-auto"><span className="material-icons">search</span></button>
                </Form>
            </Nav.Item>

        </Navbar>
    </Container>
  )
}

export default topnavbar