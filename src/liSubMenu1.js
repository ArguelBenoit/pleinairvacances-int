import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LiSubMenu2 from './liSubMenu2';

class LiSubMenu1 extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
  }
  render() {
    const { scroll, icon, txt, sub, subClassName } = this.props;
    const { hovered } = this.state;
    const propsLi = {
      className: `li-lvl-1 ${subClassName}`,
      style: {
        color: scroll < 300
        ? 'white'
        : 'black'
      },
      onMouseEnter: () => this.setState({hovered: true}),
      onMouseLeave: () => this.setState({hovered: false})
    };
    return <li {...propsLi}>
      <i className={`${icon} ${subClassName}`} />
      {txt}
      {sub && hovered
        ? <div className="sub-menu-1">
            <div className="fake-arrow" />
            <ul className="ul-lvl-2">
              {sub.map( (el, i) => {
                return <LiSubMenu2 key={'liSub1' + i} icon={el.icon} txt={el.name} sub={el.subMenu} />;
              })}
            </ul>
          </div>
        : ''
      }
    </li>;
  }
}

LiSubMenu1.propTypes = {
  scroll: PropTypes.number.isRequired,
  subClassName: PropTypes.string,
  icon: PropTypes.string,
  txt: PropTypes.string,
  sub: PropTypes.any
};

export default LiSubMenu1;
