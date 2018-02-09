import React, { Component } from 'react';
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
      i: 0,
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
      let { i, bg } = this.state;
      if (i === bg.length-1)
        this.setState({i: 0});
      else
        this.setState({i: i+1});
    };
    setInterval(
      action,
      time
    );
  }
  render() {
    console.log('rerender');
    const { i, bg } = this.state;
    return <div className="backgroundSlider-container">
      <div />
      
      <img src={bg[i]} alt="background"/>
    </div>;
  }
}

export default BackgroundSlider;
