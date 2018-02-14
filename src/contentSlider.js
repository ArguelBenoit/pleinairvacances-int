import React, { Component } from 'react';
import './css/content-slider.css';
import store from './store/store';
import logo from './img/logo_transparent.png';
import ArrowSlider from './arrowSlider';

class ContentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  render() {
    const propsLogo = {
      src: logo,
      width: '100%',
      height: '100%'
    };
    const width = store.viewport.width;
    if (store.viewport.width > 850) {
      return <div className="content-slider" style={{width: width*2}}>
        <section style={{width}}>
          <div style={{width}} className="container-arrow-slider">
            <ArrowSlider side="right" txt="Recherchez votre séjour" />
          </div>
          <div className="container-first-section">
            <div className="container-logo">
              <div className="container-logo-img">
                <img alt="" {...propsLogo} />
              </div>
              <h1><span>Leader</span> de l´hôtellerie de plein air en corse</h1>
              <div className="div-border" />
            </div>
          </div>
        </section>
        <section style={{width}}>
          <div className="container-arrow-slider">
            <ArrowSlider side="left" txt="Page d'accueil" />
          </div>
          <div style={{background: 'black'}} />
        </section>
      </div>;
    } else {
      return <div />;
    }
  }
}

export default ContentSlider;
