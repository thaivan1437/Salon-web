import React, { Component } from 'react';
import { Container, Modal } from "react-bootstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisable: false,
      modalData: null
    }
  }
  renderModalContent() {
    switch (this.state.modalData) {
      case "privacy":
        return <iframe src="/privacy-policy/headless/1" style={{width:"100%",height:'100%', border:0}} />
      case "terms":
        return <iframe src="/terms-of-use/headless/1" style={{width:"100%",height:'100%', border:0}} />
      case "help":
        return <iframe src="/help/headless/1" style={{width:"100%",height:'100%', border:0}} />
      case "eula":
        return <iframe src="/eula/headless/1" style={{width:"100%",height:'100%', border:0}} />
      default:
        break;
    }
  }
  isModal(show, data) {
    return (
      <Modal
        show={show}
        onHide={() => { this.setState({ modalDisable: false }) }}
        backdrop={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{border:0}}  />
        <Modal.Body style={{padding:10}}>
         <div style={{height:data === "help" ? 250 : 550}}>
         {
            this.renderModalContent()
          }
         </div>
        </Modal.Body>
      </Modal>
    )
  }
  render() {
    return (
      <footer className="footer">
        {this.isModal(this.state.modalDisable, this.state.modalData)}
        <Container>
          <center className="container pt-5 pb-3">
            <a className="text-center" style={{ color: '#fff', marginRight: 20, cursor:'pointer' }} onClick={() => { this.setState({ modalDisable: true, modalData: 'privacy' }) }}> Privacy Policy</a>
            <a className="text-center" style={{ color: '#fff', marginRight: 20, cursor:'pointer' }} onClick={() => { this.setState({ modalDisable: true, modalData: 'terms' }) }}> Terms Of Use</a>
            <a className="text-center" style={{ color: '#fff', marginRight: 20, cursor:'pointer' }} onClick={() => { this.setState({ modalDisable: true, modalData: 'eula' }) }}> Eula</a>
            <a className="text-center" style={{ color: '#fff', cursor:'pointer'  }} onClick={() => { this.setState({ modalDisable: true, modalData: 'help' }) }}> Help</a>
          </center>
          <div>
            <p className="text-center" style={{ color: '#fff' }}>
              Ⓒ 2019 — <span>Salon Manager Inc</span> is a Silicon Valley company</p>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;