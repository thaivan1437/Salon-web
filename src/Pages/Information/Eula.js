import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import Eula from "../includes/Information/Eula";



class Home extends Component {
    render() {
        return (
            this.props && this.props.query && this.props.query.headless === "1" ?
                <div style={{ backgroundColor: "#FFF" }}>
                    <Eula modal={true} />
                </div>
                :
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <Eula />
                    <Footer />
                </div>
                
        );
    }
}

export default Home;
