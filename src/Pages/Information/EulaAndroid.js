import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import EulaAndroid from "../includes/Information/EulaAndroid";
import Link from 'next/link';

class EulaAndroids extends Component {
    render() {
        return (
            this.props && this.props.params && this.props.params.headless === "1" ?
                <div style={{ backgroundColor: "#FFF", paddingLeft: "30px", paddingRight: "30px" }}>
                    {
                        this.props && this.props.browser && this.props.browser.on !== "web" ?
                        null :
                        <Link href={"/eula/headless/1"} style={{ backgroundColor: 'transparent', color: '#000' }}>
                            <p style={{color:'#000'}}>{"< Back"}</p>
                        </Link>
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
