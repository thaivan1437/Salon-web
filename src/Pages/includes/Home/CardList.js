import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

class CardList extends Component {
  render() {
    return (
      <div className="container-fluid pb-5">
        <Row className="justify-content-center">
          <Col className="col-12">
            <h3 className="pt-5 text-center">Save money and time when you use Salon Manager app</h3>
          </Col>
          <Col className="col-12">
            <ul className="sm-after">
              <li><span>Save money and time</span></li>
              <li><span>Maximize your revenue</span></li>
              <li><span>Freedom to leave the salon early every evening</span></li>
            </ul>
          </Col>
        </Row>
        <Container style={{ marginTop: 50, marginBottom: 10 }}>
          <Row>
            <Col className="col-12 col-md-4 pb-3">
              <div className="card card-style">
                <div className="card-body card-style text-center save-box" style={{ backgroundColor: '#d4d5d6' }}>
                  <b>Try It FREE</b>
                </div>
                <p className="card-text p-3 content-para price-para" style={{minHeight: '200px'}}>
                  We made your salon management easier for you, so you can maximize your revenue and profits.
                </p>
              </div>
            </Col>
            <Col className="col-12 col-md-4 pb-3">
              <div className="card card-style">
                <div className="card-body card-style text-center save-box text-white" style={{ backgroundColor: '#0079BD' }}>
                  <b>Easy Setup</b>
                </div>
                <p className="card-text p-3 content-para price-para" style={{minHeight: '200px'}}>
                  Setting up Salon Manager app is really easy.&nbsp;
                  <a href="https://salonmanager.com/get-started">
                    Guided installation steps
                  </a> will help you run the app in a few minutes.
                  With easy featurers, you can save time in managing your salon business.
                </p>
              </div>
            </Col>
            <Col className="col-12 col-md-4 pb-3">
              <div className="card card-style">
                <div className="card-body card-style text-center save-box" style={{ backgroundColor: '#d4d5d6' }}>
                  <b>Save Money</b>
                </div>
                <p className="card-text p-3 content-para price-para" style={{minHeight: '200px'}}>
                  Instead of spending too much time on splitting earnings and tips among employees, customer check-ins, employee clock in/out and working schedules, let Salon Manager help you maximize your revenue.
                </p>
              </div>
            </Col>
            <Col className="col-12 pbb-3">
              <div className="text-center" style={{marginTop: '25px'}}>
                Salon Manager participates in Square PartnerUp program.&nbsp;
                <a href="https://squareup.com/t/f_partnerships/p_salonmanager/l_us?route=" target="_blank" rel="noopener noreferrer">
                  Click here for details.
                </a>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default CardList;
