import React, { Component } from 'react';
import logo from './img/logo_transparent.png';
import './css/header.css';
import { typeOfActions } from './store/actions';
import store from './store/store';
import LiSubMenu1 from './liSubMenu1';
import { menu } from './menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: window.scrollY,
      viewport: store.viewport // viewport: {height: X, width: X}
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
    store.on(
      typeOfActions.CHANGE_VIEWPORT,
      () => {
        this.setState(
          {viewport: store.viewport}
        );
      }
    );
  }
  render() {
    const {
      scroll,
      viewport
    } = this.state;
    const propsHeader = {
      className: 'header',
      style: {
        background: scroll < 300
          ? 'transparent'
          : 'rgba(255,255,255,0.8)',
        width: scroll < 300 // in futur && section isn´t hp
          ? viewport.width + 170
          : viewport.width,
        left: scroll < 300 // in futur && section isn´t hp
          ? -170
          : 0
      }
    };
    return <div {...propsHeader}>
      <img src={logo} alt="logo, plein air vacances"/>
      <ul className="main-menu">
        {menu.map( (el, i) => {
          return <LiSubMenu1
                  key={'firstLi' + i}
                  scroll={scroll}
                  subClassName={el.className}
                  icon={el.icon}
                  txt={el.name}
                  sub={el.subMenu}
                />;
        })}
      </ul>
      <ul className="second-menu">
        <LiSubMenu1 scroll={scroll} icon="fas fa-user" />
        <LiSubMenu1 scroll={scroll} icon="fas fa-users" />
      </ul>
    </div>;
  }
}

export default Header;
