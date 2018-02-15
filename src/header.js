import React, { Component } from 'react';
import logo from './img/logo_transparent.png';
import './css/header.css';
import './css/menu.css';
import './css/menu2.css';
import './css/menu3.css';
import { typeOfActions } from './store/actions';
import store from './store/store';
import LiSubMenu1 from './liSubMenu1';
import { menu } from './menu';
import { Actions } from './store/actions.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.state = {
      scroll: window.scrollY,
      viewport: store.viewport,
      small: store.viewport.width < 1360
        ? true
        : false,
      menuActived: false
    };
  }
  componentDidMount() {
    store.on(
      typeOfActions.CHANGE_SCROLL,
      () => {
        this.setState(
          {scroll: store.scroll}
        );
      }
    );
    store.on(typeOfActions.CHANGE_VIEWPORT, this.resize);
  }
  resize() {
    if (this.state.viewport.width > 1360)
      this.setState({ viewport: store.viewport, small: false });
    else
      this.setState({ viewport: store.viewport, small: true });
  }
  render() {
    const {
      scroll,
      viewport,
      small,
      menuActived
    } = this.state;
    const propsHeaderBig = {
      className: 'header-big',
      style: {
        background: scroll < 300 ? 'transparent' : 'rgba(255,255,255,0.8)',
        width: scroll < 300 ? viewport.width + 170 : viewport.width,
        left: scroll < 300 ? -170 : 0
      }
    };
    const propsHeaderSmall = {
      className: 'header-small',
      style: {
        background: scroll < 150 || menuActived ? 'transparent' : 'rgba(255,255,255,0.8)',
        width: scroll < 150 ? viewport.width + 105 : viewport.width,
        left: menuActived ? '280px' : 0
      }
    };
    const propsButton = {
      onClick: () => {
        this.setState({menuActived: !menuActived});
        Actions.leftPanel();
      },
      className: `container-menu ${menuActived ? ' actived' : '' }`
    };
    const styleChildMenu = { background: scroll < 150 ? 'white' : '#333' };
    if (small) {
      return <div {...propsHeaderSmall}>
        <div {...propsButton}>
          <div style={styleChildMenu} className="child one"/>
          <div style={styleChildMenu} className="child two"/>
          <div style={styleChildMenu} className="child three"/>
        </div>
        <img src={logo} alt="logo, plein air vacances" ref="logo"/>
      </div>;
    } else {
      return <div {...propsHeaderBig}>
        <img src={logo} alt="logo, plein air vacances" ref="logo"/>
        <ul className="main-menu" ref="mainMenu">
          {menu.map( (el, i) => {
            const propsSubMenu = {
              key: 'firstLi' + i,
              scroll: scroll,
              subClassName: el.className,
              icon: el.icon,
              txt: el.name,
              sub: el.subMenu
            };
            return <LiSubMenu1 {...propsSubMenu} />;
          })}
        </ul>
        <ul className="second-menu" ref="secondMenu">
          <LiSubMenu1 scroll={scroll} icon="fas fa-user" />
          <LiSubMenu1 scroll={scroll} icon="fas fa-users" />
        </ul>
      </div>;
    }
  }
}

export default Header;
