import React, { Component } from 'react';
import { Image, Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';

class Title extends Component {
    render() {
        return (
            <center>
                <div className="ana_div">
                    <div className="div">
                        <div className="div2">
                            {
                                this.props && this.props.device === "ipad" ?
                                    <span>iPad App</span>
                                    :
                                    <Link href="?device=ipad">
                                        <a>iPad App</a>
                                    </Link>   
                            }
                        </div>
                        <div className="div2">
                            {
                                this.props && this.props.device === "mobile" ?
                                    <span>Mobile App</span>
                                    :
                                    <Link href="?device=mobile">
                                        <a>Mobile App</a>
                                    </Link> 
                            }
                        </div>
                    </div>
                </div>
            </center>

        );
    }
}

export default Title;