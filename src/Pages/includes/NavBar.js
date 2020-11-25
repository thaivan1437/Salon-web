import React, { Component } from 'react';
import { Navbar, Nav, Image } from "react-bootstrap";
import Link from 'next/link';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: this.props.bg === true ? "#0079bd" : "transparent" }} expand="lg">
          <Navbar.Brand className='navbar-brand' href="/">
            <Image src={require("../../static/image/logo.png")} className='logo-brand ml-sm-5 img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:0}}>
          <img src={require("../../static/image/navbar-toggler-icon.png")} height="30" width="30" alt="" />
          </Navbar.Toggle>
          <Navbar.Collapse className="collapse navbar-collapse justify-content-end mr-sm-5 menubar-salon" id="basic-navbar-nav">
            <Nav className="navbar-nav mr-sm-2 navigation-item content-para1">
              {
                this.props.routeName !== "/" ?
                  <Nav className="nav-link">
                    <Link href="/" style={{ marginTop: 10 }}>
                      <a style={{ color: "#fff" }}> Home </a>
                    </Link>
                  </Nav>
                  : null
              }
              <Nav className="nav-link">
                <Link href="/app-screenshots">
                  <a style={{ marginTop: 10, color: this.props.routeName !== "/app-screenshots" ? "#FFF" : "#9b9b9b" }}>App Screenshots</a>
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;