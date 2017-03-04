
import React, { Component } from 'react';
import BadgeList from '../../../../components/BadgeList';
import technologiesDetails from '../../../../components/BadgeList/technologiesDetails';

import styles from './styles.scss';


class RightSection extends Component {

  render() {
    return (
      <section id='rightSection'>
        <div id='webProjects' className='category'>
          <h3 className='category-title'>Projets Web</h3>
          <div className='category-items'>

            <div className='category-item'>
              <h4 className='category-item-title'>Formations Post-Bac | <span className='category-item-title-mention'>En dév.</span></h4>
              <p className='category-item-description'>Licence, DUT, ..., master, doctorat : recherche centralisée, finement comparée (par débouchés, coût de la vie local, sélectivité, ...) et renforcée par des témoignages et des informations complémentaires.</p>
              <BadgeList details={technologiesDetails} badges={['React', 'ES6', 'GraphQL', 'Relay', 'Node.js', 'Mongoose', 'Webpack v2', 'Material-UI']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Affiche Scientifique | <span className='category-item-title-mention'>terminée</span></h4>
              <p className='category-item-description'>{"Synthèse de plusieurs articles scientifiques sur l'éthique en expérimentation humaine."}</p>
              <BadgeList details={technologiesDetails} badges={['React', 'ES6', 'Webpack v2', 'Material-UI', 'GIMP']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Web Conception | <a href='https://webconception.fr' className='category-item-title-mention'>webconception.fr</a></h4>
              <p className='category-item-description'>Freelance : Création de Site Internet, Application Mobile Native et Logiciel.</p>
              <BadgeList details={technologiesDetails} badges={['jQuery', 'Bootstrap', 'PHP']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Talented | <span className='category-item-title-mention'>arrêté</span></h4>
              <p className='category-item-description'>L'application mobile d'un réseau social de partage d'activités et de location d'équipements entre particuliers.</p>
              <BadgeList details={technologiesDetails} badges={['React', 'React Native', 'Redux', 'ES6', 'Feathers.js', 'Mongoose', 'Passport.js', 'GIMP']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>GMAO Tailor | <span className='category-item-title-mention'>arrêté</span></h4>
              <p className='category-item-description'>{"Application web de Gestion et Management Assistés par Ordinateur (GMAO), dynamique et intuitive, capable de s'adapter à des projets ciblés via une programmation visuelle (UML) orientée object."}</p>
              <BadgeList details={technologiesDetails} badges={['Node.js', 'Socket.io', 'Angular', 'Angular Material', 'SASS', 'Paper.js', 'CodeMirror', 'Lodash', 'Grunt', 'Bower']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Headlings | <span className='category-item-title-mention'>arrêté</span></h4>
              <p className='category-item-description'>Réseau social centré sur sa ville.</p>
              <BadgeList details={technologiesDetails} badges={['Sails.js', 'Socket.io', 'Angular', 'Bootstrap', 'Passport.js', 'Lodash', 'Grunt']} />
            </div>
          </div>
        </div>

        <div id='otherSkills' className='category'>
          <h3 className='category-title'>Autres Compétences Techniques</h3>
          <div className='category-items'>
            <BadgeList details={technologiesDetails} badges={['RxJs', 'D3 v4', 'Immutable.js', 'GitHub', 'FP en js', 'Karma', 'Jasmine', 'Phantomjs', 'jQuery UI']} />
          </div>
        </div>
      </section>
    );
  }
}

export default RightSection
