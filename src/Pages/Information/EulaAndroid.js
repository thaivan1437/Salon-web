import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import EulaAndroid from "../includes/Information/EulaAndroid";

class EulaAndroids extends Component {
    render() {
        return (
            this.props && this.props.query && this.props.query.headless === "1" ?
                <div style={{ backgroundColor: "#FFF", paddingLeft: "30px", paddingRight: "30px" }}>
                    {
                        this.props && this.props.query && this.props.query.on !== "web" ?
                        null :
                        <a href={"/eula?headless=1"} style={{ backgroundColor: 'transparent', color: '#000' }}>
                        <p style={{color:'#000'}}>{"< Back"}</p>
                        </a>
                    }
                    <EulaAndroid />
                </div>
                :
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <EulaAndroid />
                    <Footer />
                </div>
                
        );
    }
}

export default EulaAndroids;
