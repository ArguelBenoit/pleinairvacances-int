import React from 'react';
import PropTypes from 'prop-types';

const ArrowSlider = (props) => {
  const { txt, side } = props;
  const propsContent = {
    className: `arrow-slider ${side}`,
    style: side === 'right'
      ? {
        paddingRight: '20px',
        right: 0
      } : {
        paddingLeft: '20px',
        left: 0
      }
  };
  const propsI = {
    className: 'fas fa-chevron-up',
    style: side === 'right'
      ? {
        transform: 'rotate(90deg)',
        float: 'right'
      } : {
        transform: 'rotate(-90deg)',
        float: 'left'
      }
  };
  const propsTxt = {
    style: side === 'right'
      ? {
        float: 'left',
        textAlign: 'right'
      } : {
        float: 'right',
        textAlign: 'left'
      }
  };
  return <div {...propsContent}>
    {txt
      ? <div {...propsTxt}>{txt}</div>
       : ''
     }
    <i {...propsI} />
  </div>;
};

ArrowSlider.propTypes = {
  txt: PropTypes.string,
  side: PropTypes.string
};

export default ArrowSlider;
