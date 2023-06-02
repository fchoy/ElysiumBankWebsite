import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../Components/credits.css'


const credits = () => {
  return (
    <Container fluid="true">
        <p className="col-auto text-center credits-text">Created by Felix Choy using React, Bootstrap, and React-Bootstrap. © 2023</p>
    </Container>
  )
}

export default credits