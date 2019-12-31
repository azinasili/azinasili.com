import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Intro from '../../components/intro/Intro';
import Thumbnail from '../../components/thumbnail/Thumbnail';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Intro description={this.props.description} />
        <Thumbnail projects={this.props.projects} />
      </div>
    );
  }
}

Home.propTypes = {
  description: PropTypes.string,
  projects: PropTypes.array,
};

export default Home;
