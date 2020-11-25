import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import NavBar from "../NavBar";
import iconSquare from '../../../static/image/icon_square.png'
import frameIpad from '../../../static/image/frame_ipad_large_resize.png'

class HeaderSub extends Component {
  render() {
    return (
      <div>
        <NavBar routeName={this.props.routeName} bg={false} />
        <h2 className="text-center pt-5 text-white animated banner-text mobile">
          <b style={{ fontFamily: 'Intelo-Bold', fontWeight: '600', fontSize: 60 }}>Salon Manager</b>
          <span style={{ fontFamily: 'Intelo-Light', fontWeight: 'normal', fontSize: 55 }}> app</span>
        </h2>
        <h5 className="text-center pb-5 text-white animated banner-text mobile" style={{ fontWeight: '100', fontSize: 55 }}>
          <span style={{ fontFamily: "Intelo-Light" }}>that works with</span>
          <Image src={iconSquare} style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10, marginBottom: 10 }} />
          <b style={{ fontFamily: 'Intelo-Bold', fontWeight: '600' }}>Square</b>
          <sup style={{ fontSize: 30, fontFamily: 'Intelo-Bold', fontWeight: '600' }}>™ </sup>
        </h5>
        <div id="demo" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner spacer-50 d-none d-md-block d-lg-block d-xl-block">
            <div className="carousel-item active hero-image">
              <div className="carousel-caption element-animation">
                <center>
                  <span style={{ fontFamily: "Intelo-Light", color: '#ccc', fontSize: 12 }}>Square is a trademark of Square, Inc.</span>
                </center>
                <Image src={frameIpad} className="hero-image img-fluid" alt={this.props.txtImageAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSub;