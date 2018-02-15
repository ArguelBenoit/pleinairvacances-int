import React from 'react';
import H1 from './h1';
import './css/section3.css';
import Vignette2 from './vignette2';
import store from './store/store';
import NavigationArrow from './navigationArrow';

import background1 from './img/vignette2/1.jpg';
import background2 from './img/vignette2/2.jpg';
import background3 from './img/vignette2/3.jpg';
import background4 from './img/vignette2/4.jpg';
import background5 from './img/vignette2/5.jpg';
import background6 from './img/vignette2/6.jpg';

const propsVignette = [
  {
    txt: 'Camping à la mer',
    icon: 'fas fa-ship',
    src: background1
  }, {
    txt: 'Avec parcs aquatiques',
    icon: 'fas fa-tint',
    src: background2
  }, {
    txt: 'Camping à la campagne',
    icon: 'fab fa-pagelines',
    src: background3
  }, {
    txt: 'Séjours insolites',
    icon: 'fas fa-tree',
    src: background4
  }, {
    txt: 'Camping à la montagne',
    icon: 'fas fa-snowflake',
    src: background5
  }, {
    txt: 'Séjours de préstige',
    icon: 'fas fa-gem',
    src: background6
  }
];

const Section3 = () => {
  const propsSection = {
    className: 'section3',
    id: 'section3',
    style: {
      padding: store.viewport.width > 850
        ? '100px 0 150px 0'
        : '0 0'
    }
  };
  const propsNaviguationArrow = {
    color1: '#000',
    color2: '#fff',
    link1: '#section3',
    link2: '#section2'
  };
  return <section {...propsSection}>
    <NavigationArrow {...propsNaviguationArrow} />
    <div className="container main-container">
      <H1 txt={'NOS THÉMATIQUES'} color={'white'} border={'orange'}/>
      <div className="row main-row">
        <div className="four columns">
          <Vignette2 {...propsVignette[0]} />
          <Vignette2 {...propsVignette[1]} />
        </div>
        <div className="four columns">
          <Vignette2 {...propsVignette[2]} />
          <Vignette2 {...propsVignette[3]} />
        </div>
        <div className="four columns">
          <Vignette2 {...propsVignette[4]} />
          <Vignette2 {...propsVignette[5]} />
        </div>
      </div>
    </div>
  </section>;
};

export default Section3;
