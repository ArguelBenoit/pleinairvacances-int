import React from 'react';
import './css/section4.css';
import H1 from './h1';
import store from './store/store';
import NavigationArrow from './navigationArrow';

const reasons = [
  {
    txt: 'Lorem ipsum dolor sit amet',
    icon: 'fas fa-map-marker-alt'
  }, {
    txt: 'Consectetur adipiscing elit',
    icon: 'far fa-map'
  }, {
    txt: 'Sed do eiusmod tempor incididunt',
    icon: 'fas fa-shopping-bag'
  }, {
    txt: 'Ut labore et dolore magna',
    icon: 'fab fa-accessible-icon'
  }, {
    txt: 'Excepteur sint occaecat',
    icon: 'fas fa-american-sign-language-interpreting'
  }
];

const Section4 = () => {
  const propsSection = {
    className: 'section4',
    id: 'section4',
    style: {
      padding: store.viewport.width > 850
        ? '100px 0 150px 0'
        : '0 0'
    }
  };
  const propsNaviguationArrow = {
    color1: '#fff',
    color2: '#fff',
    link1: '#section4',
    link2: '#section3'
  };
  return <section {...propsSection} >
    <NavigationArrow {...propsNaviguationArrow} />
    <div className="container">
      <H1 txt={'5 BONNES RAISONS DE CHOISIR PLEIN AIR VACANCES'} color={'white'} border={'blue'}/>
      <div className="row main-row">
        <div className="row main-row">
          {reasons.map((el,i) => {
            return <div key={i} className="line" style={{marginLeft: i*30 + 'px'}}>
              <i className={el.icon} />
              {el.txt}
            </div>;
          })}
          <div className="columns six">
            {''}
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Section4;
