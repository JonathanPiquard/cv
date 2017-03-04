
import React, { Component } from 'react';
import BadgeList from '../../../../components/BadgeList';

import styles from './styles.scss';


class LeftSection extends Component {

  render() {
    return (
      <section id='leftSection'>
        <div className='category'>
          <h3 className='category-title'>A propos de moi</h3>
          <p className='category-description'>{"Je suis un étudiant et freelancer de 21 ans, qui enchaine les projets web, toujours en intégrant les dernières technologies, en assumant tous les postes."}</p>
        </div>

        <div className='category'>
          <h3 className='category-title'>Expérience</h3>
          <div className='category-items'>
            <div className='category-item'>
              <h4 className='category-item-title'>Web Conception</h4>
              <h5 className='category-item-subtitle'>Micro-entrepreneur | <span className='category-item-subtitle-mention'>Juin 2016</span></h5>
              <p className='category-item-description'>Freelance : Création de Site Internet, Application Mobile Native et Logiciel.</p>
            </div>
          </div>
        </div>

        <div className='category'>
          <h3 className='category-title'>Diplômes</h3>
          <div className='category-items'>
            <div className='category-item'>
              <h4 className='category-item-title'>Licence en Sciences de la Vie</h4>
              <h5 className='category-item-subtitle'>Université de Strasbourg | <span className='category-item-subtitle-mention'>2014 - 2017</span></h5>
              <p className='category-item-description'>Mention Biologie Cellulaire et Physiologie des Organismes. CLES 2 Anglais.</p>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>Baccalauréat Scientifique</h4>
              <h5 className='category-item-subtitle'>Lycée St-Etienne | <span className='category-item-subtitle-mention'>2011 - 2014</span></h5>
            </div>
          </div>
        </div>

        <div className='category'>
          <h3 className='category-title'>Expérience Annexe</h3>
          <div className='category-items'>
            <div className='category-item'>
              <h4 className='category-item-title'>Vendeur Informatique</h4>
              <h5 className='category-item-subtitle'>E.Leclerc | <span className='category-item-subtitle-mention'>Eté 2015</span></h5>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>Facteur de Production</h4>
              <h5 className='category-item-subtitle'>Argru | <span className='category-item-subtitle-mention'>Eté 2015</span></h5>
            </div>
          </div>
        </div>

        <div className='category'>
          <h3 className='category-title'>Passions</h3>
          <div className='category-items'>
            <BadgeList badges={['cyclisme', 'course à pied', 'cinéma', 'court-métrage', 'littérature', 'philosophie', 'art', 'sciences']} />
          </div>
        </div>

        <div id='languages' className='category'>
          <h3 className='category-title'>Langues</h3>
          <div className='category-items'>
            <div className='category-item category-item-with-description'>
              <h4 className='category-item-title'>Anglais</h4>
              <p className='category-item-description'>| CLES 2</p>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>Espanol</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LeftSection
