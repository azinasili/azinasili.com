import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Copyright from '../../components/copyright/Copyright';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <footer className="Footer">
        <Copyright year={this.state.year} msg={this.props.info.copyright} />
      </footer>
    );
  }
}

Footer.propTypes = {
  info: PropTypes.object,
};

export default Footer;
