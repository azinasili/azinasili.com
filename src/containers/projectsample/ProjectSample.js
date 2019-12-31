import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../components/picture/Picture';
import './ProjectSample.css';

class ProjectSample extends Component {
  render() {
    return (
      <div className="Project-sample Project-sample--large">
        <Picture name={this.props.project.name} images={this.props.project.examples.intro} />
      </div>
    );
  }
}

ProjectSample.propTypes = {
  project: PropTypes.object,
};

export default ProjectSample;
