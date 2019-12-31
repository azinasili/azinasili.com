import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <p className="Description">{this.props.description}</p>
      </div>
    );
  }
}

Intro.propTypes = {
  description: PropTypes.string,
};

export default Intro;
