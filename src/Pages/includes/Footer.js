import React, { Component } from 'react';
import { Container, Modal } from "react-bootstrap";
import Link from 'next/link';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const legal = [
      { href: "/legal/headless/privacy-policy.html", name: "Privacy Policy", },
      { href: "/legal/headless/terms-of-use.html", name: "Terms Of Use", },
      { href: "/legal/headless/eula.html", name: "Eula", },
      { href: "/legal/headless/help.html", name: "Help", },
    ]
    return (
      <footer className="footer">
        <Container>
          <center className="container pt-5 pb-3">
            {legal &&
              legal.map((item, index) => {
                return <Link href={item.href} key={index}>
                  <a className="text-center" style={{ color: '#fff', marginRight: 20, cursor:'pointer' }} >
                    {item.name}
                  </a>
                </Link>
              })
            }
          </center>
          <div>
            <p className="text-center" style={{ color: '#fff' }}>
              Ⓒ 2019 — <span>Salon Manager Inc</span> is a Silicon Valley company</p>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;