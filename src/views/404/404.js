import React, { Component } from 'react';
import './404.css';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img src="http://www.placecage.com/c/500/500" className="NotFound-img" alt="A ranomly generated photo of Nicolas Cage doing something crazy." />
        <p className="NotFound-message">Oh jeez, what happened here?!</p>
      </div>
    );
  }
}

export default NotFound;