import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/navbar.css'
import NavbarBankImage from '../Images/navbarbankimage.png';
import { Container, Image, Nav } from 'react-bootstrap';

const navbar = () => {
  return (
    <Container className="w-100 h-100 row d-flex flex-row navbar-div mt-3 m-auto" fluid="true">
        <Image src={NavbarBankImage} className="img-fluid col-lg-1 bg-white" style={{marginLeft: "10%", height : "auto", width : "110px"}}/>
        <h1 className="col-lg-auto mt-auto mb-auto text-center navbar-title bg-white pb-1 pt-3" style={{marginRight: "5%", paddingRight : "1%", color: "black"}}>Elysium Bank</h1>

        <Nav className='col-lg-6 row d-flex flex-row justify-content-between align-items-center navbar-main h-50 mt-auto mb-auto'>

            <Nav.Item className="col-lg-auto row "><a href="/personal" className="text-center text-dark text-decoration-none navbar-link">Personal</a></Nav.Item>
            <Nav.Item className="col-lg-auto row"><a href="/smallbusiness" className="text-center text-dark text-decoration-none navbar-link">Small Businesses</a></Nav.Item>
            <Nav.Item className="col-lg-auto row"><a href="/largebusiness" className="text-center text-dark text-decoration-none navbar-link">Large Businesses & Institutions</a></Nav.Item>
            <Nav.Item className="col-lg-auto row"><a href="/aboutus" className=" text-center text-dark text-decoration-none navbar-link">About Us</a></Nav.Item>
        
        </Nav>
    </Container>

  )
}

export default navbar