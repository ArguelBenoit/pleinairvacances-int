import React, { Component } from 'react';

class LoadingFrame extends Component {
  constructor(props) {
    super(props);
    this.removeFrame = this.removeFrame.bind(this);
    this.state = {
      end: false,
      active: true
    };
  }
  componentDidMound() {
    window.addEventListener('load', this.removeFrame());
  }
  removeFrame() {
    let time = 600;
    window.setTimeout(() => {
      this.setState({end: true});
      window.setTimeout(() => this.setState({active: false}), time);
    }, time);
  }
  render() {
    const { end, active } = this.state;
    console.log(end);
    const propsDiv = {
      id: 'loading-frame',
      style: {
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        height: '100%',
        background: '#eee',
        opacity: end ? 0 : 1
      }
    };
    if (active) {
      return <div {...propsDiv}/>;
    } else {
      return '';
    }
  }
}

export default LoadingFrame;
