import React, { Component } from 'react';
import HeaderSub from '../includes/Home/HeaderSub'
import CheckmarkList from '../includes/Home/CheckmarkList'
import ImageList from '../includes/Home/ImageList'
import CardList from '../includes/Home/CardList'
import Footer from '../includes/Footer'

class Home extends Component {
  render() {
    return (
      <div className="site-blocks-cover">
        <HeaderSub routeName={this.props.pathname}
          txtImageAlt="An easy and smart salon management app that works with Square payment system" />
        <CheckmarkList />
        <ImageList txtImageAlt="An easy and smart salon management app that works with Square payment system" />
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default Home;
