import React from 'react';
import PropTypes from 'prop-types';


const LiSubMenu2Mobil = props => {
  const propsLi = {
    className: 'li-lvl-2'
  };
  return <li {...propsLi}>
    {props.txt}
  </li>;
};

LiSubMenu2Mobil.propTypes = {
  txt: PropTypes.string
};

export default LiSubMenu2Mobil;
