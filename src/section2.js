import React from 'react';
import H1 from './h1';
import './css/section2.css';
import Vignette1 from './vignette1';
import store from './store/store';
import NavigationArrow from './navigationArrow';

import background1 from './img/vignette1/1.jpg';
import background2 from './img/vignette1/2.jpg';
import background3 from './img/vignette1/3.jpg';
import background4 from './img/vignette1/4.jpg';
import background5 from './img/vignette1/5.jpg';
import background6 from './img/vignette1/6.jpg';

const propsVignette = [
  {
    txt1: 'Le Grau du Roi - Camping L\'eden',
    txt2: 'A partir de 169€ la semaine en promo hors juillet et août',
    src: background1
  }, {
    txt1: 'Propriano - Camping Le Colomba',
    txt2: 'A partir de 399€ la semaine en promo hors juillet et août',
    src: background2
  }, {
    txt1: 'Madrid - Camping L\'idem',
    txt2: 'A partir de 299€ la semaine en promo hors juillet et août',
    src: background3
  }, {
    txt1: 'Corse - Camping Le Parfait',
    txt2: 'A partir de 169€ la semaine en promo hors juillet et août',
    src: background4
  }, {
    txt1: 'Le Grau du Roi - Camping du ponant',
    txt2: 'A partir de 499€ la semaine en promo hors juillet et août',
    src: background5
  }, {
    txt1: 'Palavas - Camping Le Couchant',
    txt2: 'A partir de 269€ la semaine en promo hors juillet et août',
    src: background6
  }
];

const Section2 = () => {
  const propsSection = {
    className: 'section2',
    id: 'section2',
    style: {
      padding: store.viewport.width > 850
        ? '100px 0 150px 0'
        : '0 0'
    }
  };
  const propsNaviguationArrow = {
    color1: '#fff',
    color2: '#000',
    link1: '#section2',
    link2: '#section1'
  };
  return <section {...propsSection}>
    <NavigationArrow {...propsNaviguationArrow} />
    <div className="container main-container">
      <H1 txt={'NOS OFFRES DU MOMENT'} color={'black'} border={'blue'}/>
      <div className="row main-row">
        <div className="four columns">
          <Vignette1 {...propsVignette[0]} />
          <Vignette1 {...propsVignette[1]} />
        </div>
        <div className="four columns">
          <Vignette1 {...propsVignette[2]} />
          <Vignette1 {...propsVignette[3]} />
        </div>
        <div className="four columns">
          <Vignette1 {...propsVignette[4]} />
          <Vignette1 {...propsVignette[5]} />
        </div>
      </div>
    </div>
  </section>;
};

export default Section2;
