import React from 'react';
import './css/footer.css';
import footer1 from './img/footer1.png';
import footer2 from './img/footer2.png';
import logo from './img/logo_transparent.png';


const Footer = () => {
  return <div className="main-footer">
    <section className="section0">
      <div className="container">
        <div className="row">
          <a href="">Télécharger notre catalogue <i className="fas fa-file-pdf"/></a>
        </div>
      </div>
    </section>
    <section className="section1">
      <div className="container">
        <div className="row">
          <div className="three columns">
            <b>Ouvert :</b><br />
            lundi au vendredi<br />
            de 9h00 à 18h30<br />
            Samedi de 9h30 à 17h30<br />
            de Avril à Septembre
          </div>
          <div className="three columns">
            <b>
              Immeuble Olympie<br />
              Parc Eureka, 91 Rue Thor<br />
              34000 Montpellier<br />
              04 67 66 74 95
            </b>
          </div>
          <div className="three columns">
            <p className="title blue">
              Suivez nous sur les réseaux et notre blog !
            </p>
            <ul>
              <li><a href=""><i className="fab fa-twitter" /></a></li>
              <li><a href=""><i className="fab fa-facebook" /></a></li>
              <li><a href=""><i className="fab fa-google-plus-square" /></a></li>
              <li><a href=""><i className="fas fa-coffee" /></a></li>
            </ul>
          </div>
          <div className="three columns">
            <p className="title orange">
              Inscrivez vous à notre newsletter !
            </p>
            <div className="row button-newsletter">
              <input placeholder=" @ email" />
              <button><i className="fab fa-telegram-plane" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section2">
      <div className="container-logo">
        <img src={logo} width="140px" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="three columns">
            <ul>
              <li className="main"><a href="">Nos Destinations</a></li>
              <li><a href="">France</a></li>
              <li><a href="">Espagne</a></li>
              <li><a href="">Italie</a></li>
              <li><a href="">Portugal</a></li>
              <li><a href="">Croatie</a></li>
              <li><a href="">Sardaigne</a></li>
            </ul>
          </div>
          <div className="three columns">
            <ul>
              <li className="main"><a href="">Nos hébergement</a></li>
              <li><a href="">Mobil-home</a></li>
              <li><a href="">Chalet</a></li>
              <li><a href="">Appartement</a></li>
              <li><a href="">Villa</a></li>
              <li><a href="">Hébergement insolite</a></li>
            </ul>
          </div>
          <div className="three columns">
            <ul>
              <li className="main"><a href="">Séjours à la carte</a></li>
              <li><a href="">Corse en liberté</a></li>
              <li><a href="">Séjours de groupe sur mesure</a></li>
            </ul>
            <ul>
              <li className="main"><a href="">Promotions</a></li>
              <li><a href="">Nos Offres du moment</a></li>
              <li><a href="">Last minutes</a></li>
            </ul>
          </div>
          <div className="three columns">
            <ul>
              <li className="main"><a href="">Qui sommes mous</a></li>
              <li><a href="">Présentation société</a></li>
              <li><a href="">Nous contacter</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="row two" style={{paddingTop: '70px'}}>
          <a href="">© Plein Air Vacances - Plan du site - Mentions Légales</a>
        </div>
      </div>
    </section>
    <section className="section4">
      <div className="container">
        <div className="row">
          <div className="six columns">
            <img src={footer1} width="100%" alt="" />
          </div>
          <div className="six columns">
            <img src={footer2}  width="100%" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Footer;
