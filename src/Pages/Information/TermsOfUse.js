import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import TermsOfUse from "../includes/Information/TermsOfUse";



class Home extends Component {
    render() {
        return (
            this.props && this.props.params && this.props.params.headless === "terms-of-use" ?
                <div style={{ backgroundColor: "#FFF" }}>
                    <TermsOfUse />
                </div> :
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <TermsOfUse />
                    <Footer />
                </div>
                
        );
    }
}

export default Home;
