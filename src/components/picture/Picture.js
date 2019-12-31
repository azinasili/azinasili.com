import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Picture.css';

class Picture extends Component {
  render() {
    return (
      <picture className="Picture">
        {this.props.images.mobile ?
            <source srcSet={require(`../../assets/img/${this.props.name}/${this.props.images.mobile}`)} media="(max-width: 480px)" /> : false}
        {this.props.images.tablet ?
            <source srcSet={require(`../../assets/img/${this.props.name}/${this.props.images.tablet}`)} media="(max-width: 768px)" /> : false}
        <source srcSet={require(`../../assets/img/${this.props.name}/${this.props.images.base}`)} />
        <img className="Picture-img" src={require(`../../assets/img/${this.props.name}/${this.props.images.base}`)} alt={this.props.images.alt} draggable="false" />
      </picture>
    );
  }
}

Picture.propTypes = {
  name: PropTypes.string,
  images: PropTypes.object,
};

export default Picture;
