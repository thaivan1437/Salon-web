import React, { Component } from 'react';
import Footer from '../includes/Footer'
import NavBar from "../includes/NavBar";
import Slider from "../includes/AppScreenshots/Slider";
import Title from "../includes/AppScreenshots/Title";

class AppScreenShots extends Component {
    render() {
        console.log('app-screenshot', this.props)
        return (
            <div>
                <NavBar bg={true} routeName={this.props.pathname} />
                <Title device={this.props.query.device || 'ipad'} />
                <Slider device={this.props.query.device || 'ipad'} />
                <Footer />
            </div>
        );
    }
}

export default AppScreenShots;
