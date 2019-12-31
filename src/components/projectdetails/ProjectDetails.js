import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectDetails.css';

class ProjectDetails extends Component {
  render() {
    const TECH = this.props.details.technology.map((tech) => {
      return (
        <span key={tech} className="Project-tool">{tech}</span>
      );
    });

    return (
      <header className="Project-header">
        <h1 className="Project-title">{this.props.details.title}</h1>
        <div className="Project-details">
          <p className="Project-summary">{this.props.details.desc}</p>
          <div className="Project-meta">
            {this.props.details.link ?
                <p className="Project-info Project-site"><a href={this.props.details.link} className="Project-link">View Project</a></p> : false}
            {this.props.details.repo ?
                <p className="Project-info Project-repo"><a href={this.props.details.repo} className="Project-link">Visit Repo</a></p> : false}
            {this.props.details.date ?
                <p className="Project-info Project-date" dateTime={this.props.details.date}><strong>When:</strong> {this.props.details.date}</p> : false}
            {this.props.details.length ?
                <p className="Project-info Project-length"><strong>Length:</strong> {this.props.details.length}</p> : false}
            <p className="Project-info Project-tools"><strong>Tech used:</strong> {TECH}</p>
          </div>
        </div>
      </header>
    );
  }
}

ProjectDetails.propTypes = {
  details: PropTypes.object,
};

export default ProjectDetails;
