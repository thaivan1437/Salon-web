import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import TermsOfUse from "../includes/Information/TermsOfUse";



class Home extends Component {
    render() {
        return (
            this.props && this.props.query && this.props.query.headless !== "1" ?
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <TermsOfUse />
                    <Footer />
                </div>
                :
                <div style={{ backgroundColor: "#FFF" }}>
                <TermsOfUse />
        </div>
        );
    }
}

export default Home;
