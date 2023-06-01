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
    <Carousel className="container-fluid w-100 body-carousel d-flex flex-row justify-content-center align-items-center" variant="light" interval={null} style={{height : "725px"}}>
      
      <Carousel.Item className="pb-3">
        <Row className="align-items-center d-flex flex-row">
          <Container className="container-fluid d-flex flex-column w-auto align-items-center" style={{}}>
            <h3 className='text-light'>Get Paid To Bank With Elysium</h3>
            <p className='text-light'>Get $300 when you open up a new checking account with us.</p>
            <button className="btn btn-primary">Get Offer</button>
          </Container>

            <img
              className="img-fluid col-lg-6"
              src={NewAccountImage}
              alt="First slide"
              //style={{height: "810px", objectFit : "fill"}}
              style={{position : "relative", left: "-10%"}}
              />
        </Row>
      </Carousel.Item>

      <Carousel.Item className="pb-3">
        <Row className="align-items-center d-flex flex-row row">
          <Container className="container-fluid d-flex flex-column align-items-center col-lg-6" style={{width: "30%", textAlign : "center"}}>
            <h3 className='text-light'>Need Some Guidance With Your Money?</h3>
            <p className='text-light'>Speak with one of our highly qualified finanical advisors for help with budgeting, personal spending, or investment strategies.</p>
            <button className="btn btn-primary">Speak With A Financial Advisor Today</button>
          </Container>

            <img
              className="img-fluid col-lg-6"
              src={FinancialAdvisorImage}
              alt="First slide"
              //style={{height: "810px", objectFit : "fill"}}
              style={{width: "50%", position: "relative", right: "10%"}}
              />
        </Row>
      </Carousel.Item>

      <Carousel.Item className="pb-3">
        <Row className="align-items-center d-flex flex-row">
          <Container className="container-fluid d-flex flex-column w-auto align-items-center" style={{width: "30%", textAlign : "center"}}>
            <h3 className='text-light'>Finding A New Place To Settle Down?</h3>
            <p className='text-light'>
              Don't wait any longer. Get a low interest home loan starting at 2.49% APY.
            </p>
            <button className="btn btn-primary">View Rates</button>
          </Container>

            <img
              className="img-fluid col-lg-6"
              src={HomeLoanImage}
              alt="First slide"
              //style={{height: "810px", objectFit : "fill"}}
              style={{position : "relative", left: "-10%"}}
              />
        </Row>
      </Carousel.Item>

      <Carousel.Item className="pb-3">
        <Row className="align-items-center d-flex flex-row">
          <Container className="container-fluid d-flex flex-column w-auto align-items-center" style={{width: "35%", textAlign : "center"}}>
            <h3 className='text-light'>Businesses, We Got Your Back.</h3>
            <p className="w-100 gap-3 text-light">
              Looking for capital to expand your business? Look no further. 
              <br/>
              Low interest business loans starting only at 2% APY.
              <br/>
              Pay us back on your schedule.
            </p>
            <button className="btn btn-primary">Get A Business Loan Today</button>
          </Container>

            <img
              className="img-fluid col-lg-6"
              src={LargeBusinessImage}
              alt="First slide"
              //style={{height: "810px", objectFit : "fill"}}
              style={{position : "relative", left: "-10%"}}
              />
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}

export default body