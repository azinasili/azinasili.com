import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Branding.css';

class Branding extends Component {
  render() {
    return (
      <div className="Branding">
        <h1 className="Branding-title"><Link to="/" className="Branding-title-link">{this.props.name}</Link></h1>
        <p className="Branding-tagline">{this.props.title}</p>
      </div>
    );
  }
}

Branding.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Branding;
