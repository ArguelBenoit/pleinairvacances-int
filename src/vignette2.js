import React from 'react';
import PropTypes from 'prop-types';
import './css/vignette2.css';


const Vignette2 = (props) => {
  return <div className="vignette2">
    <img src={props.src} alt=""/>
    <div className="container-i">
      <i className={props.icon} />
    </div>
    <div className="txt-title">
      {props.txt}
    </div>
  </div>;
};

Vignette2.propTypes = {
  txt: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.string
};

export default Vignette2;
