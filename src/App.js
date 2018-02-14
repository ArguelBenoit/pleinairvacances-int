import React, { Component } from 'react';
import Header from './header';
import BackgroundSlider from './backgroundSlider';
import FakeSection from './fakeSection.js';
import { Actions, typeOfActions } from './store/actions.js';
import store from './store/store';
import LeftPanel from './leftPanel';
import ContentSlider from './contentSlider';


class App extends Component {
  componentDidMount() {
    window.addEventListener('load', () => {
      Actions.changeViewport(
        window.innerWidth,
        window.innerHeight
      );
      Actions.changeScroll(window.scrollY);
    });
    window.addEventListener('resize', () => {
      Actions.changeViewport(
        window.innerWidth,
        window.innerHeight
      );
    });
    window.addEventListener('scroll', () => {
      Actions.changeScroll(window.scrollY);
    });
    store.on(typeOfActions.CHANGE_VIEWPORT, () => this.forceUpdate());
  }
  render() {
    return <div>
      <Header />
      <BackgroundSlider />
      <ContentSlider />
      <FakeSection />
      {store.viewport.width < 1360
        ? <LeftPanel />
        : ''
      }
    </div>;
  }
}

export default App;
