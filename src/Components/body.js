import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import NewAccountImage from '../Images/OpenNewAccount.jpeg'
import FinancialAdvisorImage from '../Images/FinancialAdvisor.jpeg'
import HomeLoanImage from '../Images/HomeLoan.jpeg'
import LargeBusinessImage from '../Images/LargeBusiness.jpeg'
import '../Components/body.css'
import { Container, Row } from 'react-bootstrap';

const body = () => {
  return (
    <Carousel className="container-fluid body-carousel pt-5 pb-5" variant="light" interval={null}>
      
      <Carousel.Item className="pb-md-3">
        <Row className="col-auto align-items-center justify-content-center d-flex flex-lg-row flex-column">
          <Container className="container-fluid d-flex flex-column w-auto align-items-center pb-3 carousel-text-container">
            <h3 className='text-light text-center'>Get Paid To Bank With Elysium</h3>
            <p className='text-light text-center'>Get $300 when you open up a new checking account with us.</p>
            <button className="btn btn-primary">Get Offer</button>
          </Container>

            <img
              className="img-fluid col-7 carousel-image"
              src={NewAccountImage}
              alt="First slide"
              />
        </Row>
      </Carousel.Item>

      <Carousel.Item className="pb-md-3">
        <Row className=" align-items-center justify-content-center d-flex flex-lg-row flex-column">
          <Container className="container-fluid col-lg-5 d-flex flex-column align-items-center pb-3 carousel-text-container">
            <h3 className='text-light text-center'>Need Some Guidance With Your Money?</h3>
            <p className='text-light text-center'>Speak with one of our highly qualified finanical advisors for help with budgeting, personal spending, or investment strategies.</p>
            <button className="btn btn-primary">Speak With A Financial Advisor Today</button>
          </Container>

            <img
              className="img-fluid col-7 carousel-image"
              src={FinancialAdvisorImage}
              alt="Second slide"
              />
        </Row>
      </Carousel.Item>

      <Carousel.Item className="pb-md-3">
        <Row className="col-auto align-items-center justify-content-center d-flex flex-lg-row flex-column">
          <Container className="container-fluid d-flex flex-column w-auto align-items-center pb-3 carousel-text-container">
            <h3 className='text-light text-center'>Finding A New Place To Settle Down?</h3>
            <p className='text-light text-center'>Don't wait any longer. Get a low interest home loan starting at 2.49% APY.</p>
            <button className="btn btn-primary">View Rates</button>
          </Container>

            <img
              className="img-fluid col-7 carousel-image"
              src={HomeLoanImage}
              alt="Third slide"
              />
        </Row>
      </Carousel.Item>

      <Carousel.Item className="pb-md-3">
        <Row className="col-auto align-items-center justify-content-center d-flex flex-lg-row flex-column">
          <Container className="container-fluid d-flex flex-column w-auto align-items-center pb-3 carousel-text-container">
            <h3 className='text-light text-center'>Businesses, We Got Your Back.</h3>
            <p className='text-light text-center'>
              Looking for capital to expand your business? Look no further. 
              <br/>
              Low interest business loans starting only at 2% APY.
              <br/>
              Pay us back on your schedule.
            </p>
            <button className="btn btn-primary">Get A Business Loan Today</button>
          </Container>

            <img
              className="img-fluid col-7 carousel-image"
              src={LargeBusinessImage}
              alt="Fourth slide"
              />
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default body