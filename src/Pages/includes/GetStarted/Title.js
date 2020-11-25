import React, { Component } from 'react';
import { Image, Container } from "react-bootstrap";

class Title extends Component {
    render() {
        return (
            <div>
                <section className="get-about" style={{ backgroundColor: "rgb(247, 248, 250)" }}>
                    <Container>
                        <div className="justify-content-center" style={{ marginTop: 24 }}>
                            <h3 className="text-center pt-2 text-style-one">
                                Follow these simple steps to set up your Salon Manager iPad app
                            </h3>
                            <center>
                                <b className="text-center pt-2 text-style-one" style={{ verticalAlign: "middle", marginRight: 5, marginTop: 18 }}>
                                    Available for
                                </b>
                                <Image src={require("../../../static/image/logo_iPad_black.png")} style={{ width: 100, height: 45 }} />
                            </center>
                        </div>
                    </Container>
                </section>
                <section>
                    <div className="container-fluid" style={{ backgroundColor: 'rgb(247, 248, 250)' }}>
                        <div className="row justify-content-center">
                            <div className=" col-sm-12 col-md-9  col-12 col">
                                <Container>
                                    <h3 className="text-style-get pb-2" style={{ fontWeight: '900' }}>Requirements:</h3>
                                    <div className='col-12 col-md-6 content-para mouseover-underlinenull' style={{ marginTop: 10 }}>
                                        <i className="fa fa-check pr-2" style={{ fontSize: 18, color: 'rgb(70, 171, 219)', marginBottom: 0 }} />
                                        <span>Must have an account with Square.</span>
                                    </div>
                                    <div className='col-12 col-md-6 content-para mouseover-underlinenull' style={{ marginTop: 10 }}>
                                        <i className="fa fa-check pr-2" style={{ fontSize: 18, color: 'rgb(70, 171, 219)', marginBottom: 0 }} />
                                        <span>Must have an iPad to install Salon Manager app.</span>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Title;