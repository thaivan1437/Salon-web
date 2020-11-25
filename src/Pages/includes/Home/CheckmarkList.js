import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CheckMarkList extends Component {
  render() {
    return (
      <section style={{ backgroundColor: '#f7f8fa' }}>
        <Container>
          <div className="justify-content-center">
            <div className="col-12 col-lg-9 offset-lg-1">
              <h5 className="text-center pt-5 text-style-one" style={{ color: '#212528' }}>
                Managing Your Salon Has Never Been Easier
             </h5>
              <h5 className="text-center pt-5 text-style-one" style={{ color: '#212528' }}>
                Salon Manager app will help you focus on your quality services and increase customer satisfaction
             </h5>
              <p className="text-center pt-5 text-style-one" style={{ color: '#212528', marginTop: 40, marginBottom: 20 }}>
                Check out these <b>awesome features</b>
              </p>
            </div>
          </div>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#split-earnings-and-tips-between-nail-technicians-hairstylists">
                <p className="tab-dot">
                  <b>Split earnings</b> and <b>tips</b> between nail technicians and/or hairstylists
                 </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#customers-check-in-with-request-favorite-employee-option">
                <p className="tab-dot">
                  <b>Customers Check-In</b> with <b>request favorite employee</b> option
                 </p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#weekly-work-scheduling-by-employees">
                <p className="tab-dot">
                  <b>Weekly Work Scheduling</b> by employees
                 </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#whose-turn-feature-to-take-turns-for-busy-salons">
                <p className="tab-dot">
                  <b>Whose Turn</b> feature to take turns for busy salons
                 </p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#tips-transaction-fee-adjustment-when-tips-paid-by-credit-cards">
                <p className="tab-dot">
                  <b>Tips Transaction Fee</b> adjustment when tips paid by Credit Cards
                 </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#employee-clock-in-out-options-for-earnings-calculation">
                <p className="tab-dot">
                  <b>Employee Clock In/Out</b> options for earnings calculation
                 </p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#easy-to-use-appointment-feature">
                <p className="tab-dot">
                  Easy to use <b>Appointment</b> feature
                 </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#employee-cash-salary-payment-calculator">
                <p className="tab-dot">
                  Employee <b>Cash Salary Payment</b> calculator
                 </p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#employee-cash-earnings-list-for-payroll">
                <p className="tab-dot">
                  Employee <b>Cash Earnings</b> list for payroll
                 </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#customers-discount-sharing-options-between-business-owners-and-employees">
                <p className="tab-dot">
                  <b>Customers Discount Sharing</b> options between business owners and employees
                 </p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#">
                <p className="tab-dot">
                  <b>Color Notes</b> help you keep record of your customers' <b>hair</b> and <b>nail colors</b>
                </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#salon-earnings-with-expense-reporting-tool">
                <p className="tab-dot">
                  <b>Salon Earnings</b> with <b>expense reporting</b> tool
                 </p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#">
                <p className="tab-dot">
                  <b>Send SMS messages</b> to request <b>Social Media reviews</b> from your <b>happy customers</b>
                </p>
              </a>
            </Col>
            <Col className="col-12 col-md-6 content-para mouseover-underline pt-2 pb-2">
              <img alt="check-icon" src={require("../../../static/image/check.svg")} />
              <a className="_ci" href="#employee-iphone-android-apps-with-earnings-weekly-work-scheduling-appointment">
                <p className="tab-dot">
                  Employee <b>iPhone</b> and <b>Android apps</b> with <b>Earnings, Weekly Work Scheduling</b> and <b>Appointment</b> features
                 </p>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default CheckMarkList;