import React from 'react';
import store from './store/store';

const Research = () => {
  const { width, height } = store.viewport;
  const propsContainer = {
    className: '',
    style: width > 850 ? {
      width: 310,
      marginLeft: 130,
      height: 'auto',
      marginTop: - height + 230,
      background: 'rgba(255,255,255,0.35)',
      padding: '0 30px 30px 30px',
      position: 'absolute',
      zIndex: 1
    } : {
      width: width - 100,
      margin: 'auto',
      height: height - 180,
      marginTop: 65,
      padding: '20px',
      background: 'rgba(255,255,255,0.35)'
    }
  };
  const propsH1 = {
    color: 'black',
    fontFamily: 'Muli',
    fontWeight: 900,
    padding: '20px 0',
    margin: '0 0',
    fontSize: '28px'
  };
  const propsBorder = {
    height: 4,
    width: '100px',
    background: '#ff8f4b'
  };
  return <div {...propsContainer}>
    <div>
      <h1 style={propsH1}>
        Recherche manuelle
      </h1>
      <div style={propsBorder}/>
      <form className="my-form">
        <div className="row">
          <select className="u-full-width my-select" id="exampleRecipientInput">
            <option value="Option 1">Pays / Régions</option>
            <option value="Option 2">Pays 1</option>
            <option value="Option 3">Pays 2</option>
            <option value="Option 4">Pays 3</option>
          </select>
        </div>
        <div className="row">
          <select className="u-full-width my-select" id="exampleRecipientInput">
            <option value="Option 1">Villes</option>
            <option value="Option 2">ville 1</option>
            <option value="Option 3">ville 2</option>
            <option value="Option 4">ville 3</option>
          </select>
        </div>
        <input className="my-button u-full-width button-primary" type="submit" value="Submit"/>
      </form>
    </div>
  </div>;
};

export default Research;
