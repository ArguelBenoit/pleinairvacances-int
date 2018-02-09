import React, { Component } from 'react';
import Header from './header';
import BackgroundSlider from './backgroundSlider';
import { Actions } from './store/actions.js';


class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      Actions.changeViewport(
        window.innerWidth,
        window.innerHeight
      );
    });
  }
  render() {
    return <div>
      <Header />
      <BackgroundSlider />
    </div>;
  }
}

export default App;
