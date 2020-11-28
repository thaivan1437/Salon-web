import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import EulaIOS from "../includes/Information/EulaIOS";
import Link from 'next/link';

class iosEula extends Component {
    render() {
        return (
            this.props && this.props.params && this.props.params.headless === "ios" ?
                <div style={{ backgroundColor: "#FFF", paddingLeft: "30px", paddingRight: "30px" }}>
                    {
                       this.props && this.props.params && this.props.params.on !== "web" ? 
                        null :
                        <Link href={"/legal/headless/eula.html"}>
                            <a style={{color:'#000'}}>{"< Back"}</a>
                        </Link>
                    }
                    <EulaIOS  />
                </div>
                :
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <EulaIOS />
                    <Footer />
                </div>
                
        );
    }
}

export default iosEula;
