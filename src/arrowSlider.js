import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from './store/actions';


const ArrowSlider = (props) => {
  const { txt, side, size } = props;
  const propsContent = {
    className: `arrow-slider ${side}`,
    style: side === 'right'
      ? {
        paddingRight: '15px',
        right: 0
      } : {
        paddingLeft: '15px',
        left: 0
      },
    onClick: () => Actions.switchPanel(side)
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
        width: `${size}px`,
        float: 'left',
        textAlign: 'right'
      } : {
        width: `${size}px`,
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
  side: PropTypes.string,
  size: PropTypes.string
};

export default ArrowSlider;
