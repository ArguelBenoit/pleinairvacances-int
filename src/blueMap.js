import React, { Component } from 'react';
import store from './store/store';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYXJndWVsYmVub2l0IiwiYSI6ImNpczN0aTRpbjAwMWQyb3FkM3d4d3dweWwifQ.TuZpfqS-HyuaUzbe1fIiTg'
});


const markers = [
  {
    type: 'symbol',
    layout: { 'icon-image': 'marker-15' },
    coordinates: [ 3.904279, 43.571531 ]
  }, {
    type: 'symbol',
    layout: { 'icon-image': 'marker-15' },
    coordinates: [ -1.064541, 45.395530 ]
  }, {
    type: 'symbol',
    layout: { 'icon-image': 'marker-15' },
    coordinates: [ 8.788065, 42.147817 ]
  }, {
    type: 'symbol',
    layout: { 'icon-image': 'marker-15' },
    coordinates: [ -3.939086, 40.916025 ]
  }
];


class BlueMap extends Component {
  render() {
    const { width } = store.viewport;
    const propsContainer = {
      ref: 'mapContainer',
      style: {
        width: width > 850 ? window.innerWidth - 200 : window.innerWidth - 50,
        marginLeft: width > 850 ? 100 : 25,
        height: width > 850 ? window.innerHeight - 200 : window.innerHeight - 140,
        marginTop: width > 850 ? 100 : 65,
        background: 'rgba(255,255,255,0.35)'
      }
    };
    const propsMap = {
      style: 'mapbox://styles/arguelbenoit/cjdof5wgn3fjt2so65ah5tgsf',
      containerStyle: {
        height: width > 850 ? window.innerHeight - 200 + 'px' : window.innerHeight - 140 + 'px',
        width: width > 850 ? window.innerWidth - 200 + 'px' : window.innerWidth - 50 + 'px'
      },
      center: [2.33, 48.86],
      zoom: [3],
      dragRotate: false,
      touchZoomRotate: false
    };
    return <div {...propsContainer}>
      <Map {...propsMap}>
        {markers.map( (el, i) => {
          return <Layer className={'marker'} type={el.type} id={'marker' + i} layout={el.layout}>
            <Feature coordinates={el.coordinates}/>
          </Layer>;
        })}
      </Map>
    </div>;
  }
}

export default BlueMap;
