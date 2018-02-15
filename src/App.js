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
  componentDidMount() {
    this.loading = true;
    this.loadEnd = false;
    window.addEventListener('load', () => {
      Actions.changeViewport(
        this.container.clientWidth,
        window.innerHeight
      );
      Actions.changeScroll(window.scrollY);
      this.loading = false;
      setTimeout(() => {
        this.loadEnd = true;
        this.forceUpdate();
      }, 1000);
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
  render() {
    const propsloaderScreen = {
      id: 'loading-frame',
      style: {
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        height: '100%',
        background: '#fff',
        transitionDuration: '1000ms',
        opacity: this.loading ? 0 : 1
      }
    };
    return <div style={{width: '100%'}} ref={container => this.container = container} >
      {!this.loadEnd
        ? <div {...propsloaderScreen} />
        : ''
      }
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
