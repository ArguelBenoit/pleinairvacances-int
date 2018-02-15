import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LiSubMenu3 from './liSubMenu3';


class LiSubMenu2 extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    const { icon, txt, sub } = this.props;
    const { open } = this.state;
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
          height: 10 + sub.length*27 + 28,
          opacity: 1
        } : {
          height: 0,
          opacity: 0
        },
      className: 'ul-lvl-3'
    };
    return <li className="li-lvl-2">
      <i className={icon} />
      {txt}
      {sub
        ? <i {...propsIChevron} />
        : ''
      }
      {sub
        ? <ul {...propsSubUl}>
          {sub.map( (el, i) => {
            return <LiSubMenu3 txt={el.name} key={`li-lvl-3${i}`} i={i}/>;
          })}
        </ul>
        : ''
      }
    </li>;
  }
}

LiSubMenu2.propTypes = {
  icon: PropTypes.string,
  txt: PropTypes.string,
  sub: PropTypes.any
};

export default LiSubMenu2;
