import React, { Component } from 'react';
import './css/content-slider.css';
import store from './store/store';
import logo from './img/logo_transparent.png';
import ArrowSlider from './arrowSlider';
import { Actions, typeOfActions } from './store/actions';

class ContentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktopPanel: 0,
      mobilPanel: 1,
      time: 8,
      timer: true
    };
  }
  componentDidMount() {
    store.on(
      typeOfActions.SWITCH_PANEL,
      () => {
        const { switchSide, viewport, mobile } = store;
        const { desktopPanel, mobilPanel } = this.state;
        if (viewport.width > 850) { // desktop
          this.setState({
            desktopPanel: switchSide === 'left'
              ? desktopPanel - 1
              : desktopPanel + 1,
            timer: false
          });
        } else if (viewport.width <= 850) {
          this.setState({
            mobilPanel: switchSide === 'left'
              ? mobilPanel - 1
              : mobilPanel + 1,
            timer: false
          });
        }
      }
    );
    setInterval(() => {
      if (this.state.time > 1 && this.state.timer)
        this.setState({time: this.state.time - 1});
      else if (this.state.timer) {
        this.setState({
          time: 0,
          timer: false
        });
        Actions.switchPanel('right');
      }
    }
    , 1000);
  }
  render() {
    const { desktopPanel, mobilPanel, time, timer } = this.state;
    const { width } = store.viewport;
    // const { mobile } = store;
    const propsLogo = {
      src: logo,
      width: '100%',
      height: '100%'
    };
    // console.log(this.state);

    if (width > 850) {
      return <div className="frame-slider" style={{width}}>
        {timer
          ? <div className="timer-desktop">{`${time}s`}</div>
          : ''
        }
        <div className="container-section" style={{width: width*2, marginLeft: - desktopPanel * width}}>
          <section style={{width}}>
            <div className="main-section">
              <div className="container-logo">
                <div className="container-logo-img">
                  <img alt="" {...propsLogo} />
                </div>
                <h1><span>Leader</span> de l´hôtellerie de plein air en corse</h1>
                <div className="div-border" />
              </div>
            </div>
            <div style={{width}} className="container-arrow-slider">
              <ArrowSlider side="right" size="130" txt="Recherchez votre séjour" />
            </div>
          </section>
          <section style={{width, height: '100vh'}}>
            <div style={{width}} className="container-arrow-slider">
              <ArrowSlider side="left" size="100" txt="Page d'accueil" />
            </div>
          </section>
        </div>
      </div>;
    } else {
      return <div className="frame-slider" style={{width}}>
        {timer
          ? <div className="timer-mobile">{`${time}s`}</div>
          : ''
        }
        <div className="container-section" style={{width: width*3, marginLeft: - mobilPanel * width}}>
          <section style={{width}}>
            <div style={{width}} className="container-arrow-slider mob">
              <ArrowSlider side="right" size="70" txt="Page d'accueil" />
            </div>
          </section>
          <section style={{width}}>
            <div className="main-section">
              <div className="container-logo">
                <div className="container-logo-img">
                  <img alt="" {...propsLogo} />
                </div>
                <h1><span>Leader</span> de l´hôtellerie de plein air en corse</h1>
                <div className="div-border" />
              </div>
            </div>
            <div style={{width}} className="container-arrow-slider mob">
              <ArrowSlider side="left" size="110" txt="Recherchez votre séjour" />
              <ArrowSlider side="right" size="110" txt="Carte des destinations" />
            </div>
          </section>
          <section style={{width, height: '100vh'}}>
            <div style={{width}} className="container-arrow-slider mob">
              <ArrowSlider side="left" size="70" txt="Page d'accueil" />
            </div>
          </section>
        </div>
      </div>;
    }

  }
}

export default ContentSlider;
