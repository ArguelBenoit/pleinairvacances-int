import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import LiSubMenu3 from './liSubMenu3';

class LiSubMenu2 extends Component {
  render() {
    const { icon, txt, sub } = this.props;
    const propsLi = {
      style: {
        color: '#333'
      },
      className: 'li-lvl-2'
    };
    return <li {...propsLi}>
      <i className={icon} />
      {txt}
      {sub
        ? <i className="fas fa-chevron-up" />
        : ''
      }
    </li>;
  }
}
// {sub
//   ? <ul>
//   {sub.map( el => {
//     return <ul>
//     <LiSubMenu2  icon={el.icon} txt={el.name} sub={el.subMenu} />
//     </ul>;
//   })}
//   </ul>
//   : ''
// }

LiSubMenu2.propTypes = {
  icon: PropTypes.string,
  txt: PropTypes.string,
  sub: PropTypes.any
};

export default LiSubMenu2;
