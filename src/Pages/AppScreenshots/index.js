import React, { Component } from 'react';
import Footer from '../includes/Footer'
import NavBar from "../includes/NavBar";
import Slider from "../includes/AppScreenshots/Slider";
import Title from "../includes/AppScreenshots/Title";

class AppScreenShots extends Component {
    render() {
        return (
            <div>
                <NavBar bg={true} routeName={this.props.pathname} />
                <Title device={this.props.params.device || 'ipad'} />
                <Slider device={this.props.params.device || 'ipad'} />
                <Footer />
            </div>
        );
    }
}

export default AppScreenShots;
