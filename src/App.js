import React, { Component } from 'react';
import Header from './header';
import BackgroundSlider from './backgroundSlider';
import { Actions, typeOfActions } from './store/actions.js';
import store from './store/store';
import LeftPanel from './leftPanel';
import ContentSlider from './contentSlider';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Footer from './footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
    this.removeFrame = this.removeFrame.bind(this);
  }
  componentDidMount() {
    window.addEventListener('load', () => {
      Actions.changeViewport(
        this.container.clientWidth,
        window.innerHeight
      );
      Actions.changeScroll(window.scrollY);
      this.removeFrame();
    });
    window.addEventListener('resize', () => {
      Actions.changeViewport(
        this.container.clientWidth,
        window.innerHeight
      );
    });
    window.addEventListener('scroll', () => {
      Actions.changeScroll(window.scrollY);
    });
    store.on(typeOfActions.CHANGE_VIEWPORT, () => this.forceUpdate());
  }
  removeFrame() {
    setTimeout(
      () => { this.setState({loading: false}); }
      , 600
    );
  }
  render() {
    const { loading } = this.state;
    const propsFrame = {
      id: 'loading-frame',
      style: {
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        height: '100%',
        background: '#eee',
        opacity: loading ? 1 : 0,
        transitionDuration: '1000ms',
        pointerEvents: !loading ? 'none' : 'inherit'
      }
    };
    return <div style={{width: '100%'}} ref={container => this.container = container} >
      <div {...propsFrame} />
      <Header />
      <BackgroundSlider />
      <ContentSlider />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      {store.viewport.width < 1360
        ? <LeftPanel />
        : ''
      }
    </div>;
  }
}

export default App;
