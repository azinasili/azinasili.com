import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'react-inlinesvg';
import './SocialMedia.css';

class SocialMedia extends Component {
  render() {
    const ICONS = this.props.socialmedia.map((icon) => {
      return (
        <a key={icon.name} href={icon.link} className={`SocialMedia-link SocialMedia-${icon.name}`}>
          <InlineSVG src={require(`../../assets/img/socialmedia/${icon.icon}`)} className={`SocialMedia-link-icon SocialMedia-${icon.name}-icon`} />
          <span className="SocialMedia-link-title">{icon.title}</span>
        </a>
      );
    });

    return (
      <div className="SocialMedia">
        {ICONS}
      </div>
    );
  }
}

SocialMedia.propTypes = {
  socialmedia: PropTypes.array,
};

export default SocialMedia;
