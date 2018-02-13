import React from 'react';
import PropTypes from 'prop-types';


const LiSubMenu3 = props => {
  const propsLi = {
    className: 'li-lvl-3'
  };
  return <li {...propsLi}>
    {props.txt}
  </li>;
};

LiSubMenu3.propTypes = {
  txt: PropTypes.string
};

export default LiSubMenu3;
