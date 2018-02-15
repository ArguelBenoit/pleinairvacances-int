import React, { Component } from 'react';
import './css/background-slider.css';
import store from './store/store';

import background1 from './img/background/background1.jpg';
import background2 from './img/background/background2.jpg';
import background3 from './img/background/background3.jpg';
import background4 from './img/background/background4.jpg';

class BackgroundSlider extends Component {
  constructor(props) {
    super(props);
    this.setInterval = this.setInterval.bind(this);
    this.state = {
      index: 0,
      bg: [
        background1,
        background2,
        background3,
        background4
      ]
    };
  }
  componentDidMount() {
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
    const { index, bg } = this.state;
    // const { width, height } = store.viewport;
    return <div className="slider">
      {bg.map( (el, i) => {
        const propsImg = {
          className: 'img',
          key: `img${i}`,
          style: {
            opacity: i > index
              ? 0
              : 1,
            background: `url( ${bg[i]} ) fixed`,
            backgroundSize: 'cover'
          }
        };
        return <div {...propsImg} />;
      })}
      <div className="buttons-container" style={{display: store.viewport.width > 850 ? 'inherit' : 'none'}}>
        {bg.map( (el, i) => {
          const propsImg = {
            className: 'button',
            key: `button${i}`,
            style: {
              background: index === i
                ? 'white'
                : 'transparent'
            },
            onClick: () => this.setState({index: i})
          };
          return <div {...propsImg} />;
        })}
      </div>
    </div>;
  }
}

export default BackgroundSlider;
