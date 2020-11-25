import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import EulaIOS from "./EulaIOS";
import EulaAndroid from "./EulaAndroid";

class Eula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            innerHeight: 0
        }
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
                                        <h3 className="text-center pt-2 text-style-one">EULA — End User License Agreement</h3>
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="container pt-4 pb-4">
                                                <center>
                                                    <Row style={{ marginTop: 100 }}>
                                                        <Col>
                                                            <a href={`/eula/ios${this.props.modal === true ? "/headless/1" : ""}`}>
                                                                <img src={require("../../../static/image/icon_ios.png")} style={{ width: 100 }} />
                                                                <p className="text-center pt-2 text-style-one" style={{ color: '#000' }}>iOS</p>
                                                            </a>
                                                        </Col>
                                                        <Col>
                                                        <a href={`/eula/android${this.props.modal === true ? "/headless/1" : ""}`}>
                                                                <img src={require("../../../static/image/icon_android.png")} style={{ width: 100 }} />
                                                                <p className="text-center pt-2 text-style-one" style={{ color: '#000' }}>Android</p>
                                                            </a>
                                                        </Col>
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
        
export default Eula;