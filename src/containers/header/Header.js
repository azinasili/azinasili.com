import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Branding from '../../components/branding/Branding';
import SocialMedia from '../../components/socialmedia/SocialMedia';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Branding name={this.props.info.name} title={this.props.info.title} />
        <SocialMedia socialmedia={this.props.info.socialmedia} />
      </header>
    );
  }
}

Header.propTypes = {
  info: PropTypes.object,
};

export default Header;
