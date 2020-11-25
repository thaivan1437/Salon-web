import React, { Component } from 'react';
import { Row, Container } from "react-bootstrap";

class Help extends Component {
    state = {
        innerHeight: 0
    }

    componentDidMount() {
        this.setState({
            innerHeight: window.innerHeight
        })
    }
    render() {
        return (
            <div>
                <section className="get-about" style={{ backgroundColor: "#FFF", height: this.state.innerHeight }}>
                    <Container>
                        <div className="justify-content-center">
                            <h3 className="text-center pt-2 text-style-one">Help</h3>
                        </div>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="container pt-4 pb-4">
                                   <center>
                                   <Row>
                                        <p style={{ fontSize: 24, fontWeight:"bold" }}>Phone: <span className="phone" data-website="0944-746 (804)"></span></p>
                                    </Row>
                                    <Row>
                                        <p style={{ fontSize: 24, fontWeight:"bold" }}>Email: <span className="e-mail" data-user="pleh" data-website="moc.reganamnolas"></span></p>
                                    </Row>
                                   </center>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

            </div>
        );
    }
}

export default Help;