import React, { Component } from 'react';
import NavBar from '../includes/NavBar'
import Footer from '../includes/Footer'
import PrivacyPolicy from "../includes/Information/PrivacyPolicy";
import { useRouter } from 'next/router'


class Home extends Component {
    render() {
        const router = useRouter()
        const { pid } = router.query
        console.log('pid',pid)
        return (
            this.props && this.props.params && this.props.params.headless === "1" ?
                <div style={{ backgroundColor: "#FFF" }}>
                    <PrivacyPolicy />
                </div>
                :
                <div style={{backgroundColor:'rgb(247, 248, 250)'}}>
                    <NavBar bg={true} />
                    <PrivacyPolicy />
                    <Footer />
                </div>
                
        );
    }
}

export default Home;
