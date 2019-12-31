import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../404/404';
import ProjectDetails from '../../components/projectdetails/ProjectDetails';
import ProjectSample from '../../containers/projectsample/ProjectSample';
import ProjectCarousel from '../../containers/projectcarousel/ProjectCarousel';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  componentWillMount() {
    this.props.project.filter((project) => {
      if (this.props.match.params.name === project.name) {
        this.setState({project: project});
      }
      return false;
    });
  }

  render() {
    if (!this.state.project.name) {
      return <Route component={NotFound} />;
    }

    return (
      <article className={`Project Project-${this.state.project.name}`}>
        <ProjectDetails details={this.state.project} />
        <div className="Project-samples">
          <ProjectSample project={this.state.project} />
          {this.state.project.examples.carousel.length > 0 ? <ProjectCarousel project={this.state.project} /> : false}
        </div>
      </article>
    );
  }
}

Project.propTypes = {
  project: PropTypes.array,
};

export default Project;