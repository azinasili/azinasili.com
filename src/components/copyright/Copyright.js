import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Copyright.css';

class Copyright extends Component {
  render() {
    return (
      <p className="Copyright">
        &copy; <span>{this.props.year}</span> {this.props.msg}
      </p>
    );
  }
}

Copyright.propTypes = {
  year: PropTypes.number,
  msg: PropTypes.string,
};

export default Copyright;
