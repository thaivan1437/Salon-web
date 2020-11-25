import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import EulaIOS from "../includes/Information/EulaIOS";

class iosEula extends Component {
    render() {
        return (
            this.props && this.props.params && this.props.params.headless === "1" ?
                <div style={{ backgroundColor: "#FFF", paddingLeft: "30px", paddingRight: "30px" }}>
                    {
                       this.props && this.props.browser && this.props.browser.on !== "web" ? 
                        null :
                        <a href={"/eula/headless/1"} style={{ backgroundColor: 'transparent', color: '#000' }}>
                        <p style={{color:'#000'}}>{"< Back"}</p>
                        </a>
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
