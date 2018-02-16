import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import store from './store/store';


class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJndWVsYmVub2l0IiwiYSI6ImNpczN0aTRpbjAwMWQyb3FkM3d4d3dweWwifQ.TuZpfqS-HyuaUzbe1fIiTg';
    this.map = new mapboxgl.Map({
      container: this.refs.mapContainer,
      style: 'mapbox://styles/arguelbenoit/cjdof5wgn3fjt2so65ah5tgsf',
      center: [2.33, 48.86],
      zoom: 3
    });
  }
  render() {
    const { width, height } = store.viewport;
    const propsContainer = {
      className: 'map-container',
      ref: 'mapContainer',
      style: {
        width: width > 850 ? width - 200 : width - 50,
        marginLeft: width > 850 ? 100 : 25,
        height: width > 850 ? height - 200 : height - 140,
        marginTop: width > 850 ? 100 : 65,
        background: 'rgba(255,255,255,0.35)'
      }
    };
    return <div {...propsContainer}/>;
  }
}

export default Map;
