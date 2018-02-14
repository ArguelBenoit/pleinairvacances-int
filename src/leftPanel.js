import React, { Component } from 'react';
import { typeOfActions } from './store/actions.js';
import store from './store/store';
import './css/leftpanel.css';
import './css/menumobil.css';
import LiSubMenu1Mobil from './liSubMenu1Mobil.js';
import { menu } from './menu.js';


class LeftPanel extends Component {
  constructor() {
    super();
    this.state = {
      actived: store.leftPanel
    };
  }
  componentDidMount() {
    store.on(typeOfActions.LEFT_PANEL, () => this.setState({actived: !this.state.actived }));
  }
  render() {
    const { actived } = this.state;
    return <div className={`left-panel ${actived ? ' actived' : ''}`}>
      <div >
        <ul className="main-menu">
          {menu.map( (el, i) => {
            const propsSubMenu = {
              key: 'firstLiMobil' + i,
              subClassName: el.className,
              icon: el.icon,
              txt: el.name,
              sub: el.subMenu
            };
            return <LiSubMenu1Mobil {...propsSubMenu} />;
          })}
        </ul>
        <ul className="second-menu">
          <LiSubMenu1Mobil icon="fas fa-users" txt="Espace CE" />
          <LiSubMenu1Mobil icon="fas fa-user" txt="Mon compte" />
        </ul>
      </div>
    </div>;
  }
}

export default LeftPanel;
