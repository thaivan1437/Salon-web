import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import Help from "../includes/Information/Help";



class Home extends Component {
    render() {
        return (
            this.props && this.props.params && this.props.params.headless === "1" ?
                <div style={{ backgroundColor: "#FFF" }}>
                    <Help />
                </div>
                :
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <Help />
                    <Footer />
                </div>
                
        );
    }
}

export default Home;
