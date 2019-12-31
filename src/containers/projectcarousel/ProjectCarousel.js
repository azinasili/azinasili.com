import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dragit from 'dragit';
import Picture from '../../components/picture/Picture';
import './ProjectCarousel.css';

class ProjectCarousel extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.dragCrousel = new Dragit(this.$el, {
      dragY: false,
      addOverflow: false,
    });
  }

  componentWillUnmount() {
    this.dragCrousel.destroy();
  }

  render() {
    const IMAGES = this.props.project.examples.carousel.map((image) => {
      return (
        <div key={image.alt} className="Project-carousel-item">
          <Picture name={this.props.project.name} images={image} />
        </div>
      );
    });

    return (
      <div className="Project-carousel" ref={(el) => this.el = el}>
        {IMAGES}
      </div>
    );
  }
}

ProjectCarousel.propTypes = {
  project: PropTypes.object,
};

export default ProjectCarousel;
