import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LiSubMenu2Mobil from './liSubMenu2Mobil';

class LiSubMenu1Mobil extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    const { icon, txt, sub, subClassName } = this.props;
    const { open } = this.state;
    const propsLi = {
      className: `li-lvl-1 ${subClassName}`,
      onMouseEnter: () => this.setState({hovered: true}),
      onMouseLeave: () => this.setState({hovered: false})
    };
    const propsIChevron = {
      style: {
        transform: open
          ? 'rotateX(180deg)'
          : 'rotateX(0deg)',
        transitionDuration: '200ms'
      },
      className: 'fas fa-chevron-up',
      onClick: () => this.setState({open: !open})
    };
    const propsSubUl = {
      style: open
        ? {
          height: sub.length*29,
          opacity: 1
        } : {
          height: 0,
          opacity: 0
        },
      className: 'ul-lvl-2'
    };
    return <li {...propsLi}>
      <i className={`${icon} ${subClassName}`} />
      {txt}
      {sub
        ? <i {...propsIChevron} />
        : ''
      }
      {sub
        ? <ul  {...propsSubUl}>
            {sub.map( (el, i) => {
              return <LiSubMenu2Mobil key={'liSub1' + i} txt={el.name} />;
            })}
          </ul>
        : ''
      }
    </li>;
  }
}

LiSubMenu1Mobil.propTypes = {
  subClassName: PropTypes.string,
  icon: PropTypes.string,
  txt: PropTypes.string,
  sub: PropTypes.any
};

export default LiSubMenu1Mobil;
