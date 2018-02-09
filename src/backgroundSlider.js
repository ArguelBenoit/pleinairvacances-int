import React, { Component } from 'react';
import { typeOfActions } from './store/actions';
import store from './store/store';
import './css/slider.css';

import background1 from './img/background/background1.jpg';
import background2 from './img/background/background2.jpg';
import background3 from './img/background/background3.jpg';
import background4 from './img/background/background4.jpg';

class BackgroundSlider extends Component {
  constructor(props) {
    super(props);
    this.setInterval = this.setInterval.bind(this);
    this.state = {
      viewport: store.viewport,
      index: 0,
      bg: [
        background1,
        background2,
        background3,
        background4
      ],
    };
  }
  componentDidMount() {
    store.on(
      typeOfActions.CHANGE_VIEWPORT,
      () => this.setState(
        { ...store.viewport }
      )
    );
    this.setInterval();
  }
  setInterval() {
    const time = 6000;
    let action = () => {
      let { index, bg } = this.state;
      if (index === bg.length-1)
        this.setState({index: 0});
      else
        this.setState({index: index+1});
    };
    setInterval(
      action,
      time
    );
  }
  render() {
    console.log('rerender');
    const { index, bg } = this.state;
    const { viewport } = store;

    const propsContainer = {
      className: 'slider',
      style: {
        width: viewport.width,
        height: viewport.height
      }
    };

    return <div {...propsContainer}>
      {bg.map( (el, i) => {
        const propsImg = {
          className: 'img',
          alt: 'background',
          key: `img${i}`,
          src: el,
          style: {
            ...propsContainer.style,
            opacity: i > index
              ? 0
              : 1
          }
        };
        return <img {...propsImg} />;
      })}
    </div>;
  }
}

export default BackgroundSlider;
