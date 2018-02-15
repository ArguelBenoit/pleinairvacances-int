import React from 'react';
import PropTypes from 'prop-types';
import './css/vignette1.css';


const Vignette1 = (props) => {
  return <div className="row vignette1">
    <img src={props.src} />
    <div className="txt">
      {props.txt1}
      <br />
      <br />
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
};

export default Vignette1;
