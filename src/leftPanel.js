import React, { Component } from 'react';
import { typeOfActions } from './store/actions.js';
import store from './store/store';
import './css/leftpanel.css';


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
      <div />
    </div>;
  }
}

export default LeftPanel;
