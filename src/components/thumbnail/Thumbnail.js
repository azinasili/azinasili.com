import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InlineSVG from 'react-inlinesvg';
import './Thumbnail.css';

class Thumbnail extends Component {
  render() {
    const THUMBNAILS = this.props.projects.map((thumbnail) => {
      return (
        <li key={thumbnail.name} className="Thumbnail-item">
          <Link to={`/portfolio/${thumbnail.name}`} className={`Thumbnail-link Thumbnail-${thumbnail.name}`}>
            <InlineSVG src={require(`../../assets/img/${thumbnail.name}/${thumbnail.thumbnail.image}`)} className={`Thumbnail-img Thumbnail-img-${thumbnail.name}`} />
          </Link>
        </li>
      );
    });

    return (
      <div className="Thumbnail">
        <ul className="Thumbnail-items">
          {THUMBNAILS}
        </ul>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  projects: PropTypes.array,
};

export default Thumbnail;
