import React from 'react';
import PropTypes from 'prop-types';


const H1 = (props) => {
  const { txt, color, border } = props;
  const propsH1 = {
    color: color,
    fontFamily: 'Muli',
    fontWeight: 900,
    padding: '40px 0',
    margin: '0 0',
    fontSize: '28px'
  };
  const propsBorder = {
    height: 4,
    width: '100px',
    background: border === 'blue'
      ? '#1ec6c2'
      : '#ff8f4b'
  };
  return <div>
    <h1 style={propsH1}>
      {txt}
    </h1>
    <div style={propsBorder}/>
  </div>;
};

H1.propTypes = {
  txt: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string
};

export default H1;
