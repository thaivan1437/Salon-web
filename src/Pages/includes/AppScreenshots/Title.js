import React, { Component } from 'react';
import { Image, Container, Row, Col } from "react-bootstrap";

class Title extends Component {
    render() {
        return (
            <center>
                <div className="ana_div">
                    <div className="div">
                        <div className="div2">
                            {
                                this.props && this.props.params && this.props.params.device === "ipad" ?
                                    <span>iPad App</span>
                                    :
                                    <a href="/app-screenshots/device/ipad">iPad App</a>
                            }
                        </div>
                        <div className="div2">
                            {
                                this.props && this.props.params && this.props.params.device === "mobile" ?
                                    <span>Mobile App</span>
                                    :
                                    <a href="/app-screenshots/device/mobile">Mobile App</a>
                            }
                        </div>
                    </div>
                </div>
            </center>

        );
    }
}

export default Title;