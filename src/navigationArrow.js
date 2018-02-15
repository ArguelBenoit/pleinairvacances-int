import React from 'react';
import PropTypes from 'prop-types';
import store from './store/store';
import './css/navigation-arrow.css';

const NavigationArrow = (props) => {
  const { link1, link2, color1, color2 } = props;
  const { width } = store.viewport;
  if (width > 850) {
    return <div className="container-naviguation">
      <a href={link1} style={{color: color1}}><i className="fas fa-chevron-down" /></a>
      <a href={link2} style={{color: color2}}><i className="fas fa-chevron-up" /></a>
    </div>;
  } else {
    return '';
  }
};

NavigationArrow.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string
};

export default NavigationArrow;
