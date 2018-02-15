import React from 'react';
import PropTypes from 'prop-types';
import './css/vignette1.css';


const Vignette1 = (props) => {
  return <div className="row vignette1">
    <div className="title">
      {props.txt1}
    </div>
    <img src={props.src} alt="" />
    <div className="info">
      {props.txt2}
    </div>
    <div className="link">
      <i className="fas fa-shopping-bag" />
      <span>Go !</span>
    </div>
  </div>;
};

Vignette1.propTypes = {
  txt1: PropTypes.string,
  txt2: PropTypes.string,
  src: PropTypes.string
  // price: PropTypes.string
};

export default Vignette1;
