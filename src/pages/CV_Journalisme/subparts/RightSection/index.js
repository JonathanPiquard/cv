
import React, { Component } from 'react';
import BadgeList from '../../../../components/BadgeList';
import technologiesDetails from '../../../../components/BadgeList/technologiesDetails';

import styles from './styles.scss';


class RightSection extends Component {

  render() {
    return (
      <section id='rightSection'>
        <div id='webProjects' className='category'>
          <h3 className='category-title'>A valeur journalistique</h3>
          <div className='category-items'>

            <div className='category-item'>
              <h4 className='category-item-title'>Immunologie Appliquée</h4>
              <p className='category-item-description'>{"Par groupe, nous avons rendu une présentation d'article sur le syndrome d'hyper IgM."}</p>
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Méthodologie du Travail Universitaire et Démarche Scientifique</h4>
              <p className='category-item-description'>{"Réaliser et comprendre un article scientifique et suivre la déontologie des sciences."}</p>
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Approches pratiques en biologie cellulaire - Végétal</h4>
              <p className='category-item-description'>{"Création d'un poster, en groupe, sur un article impliquant le gène rapporteur GUS."}</p>
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Culture scientifique et technique</h4>
              <p className='category-item-description'>{"Cours d'histoire sur la recherche scientifique en biologie et synthèse de plusieurs articles d'éthique sur l'expérimentation humaine, en groupe, sous la forme d'un poster."}</p>
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>{"Introduction à l'Ethologie Comportementale"}</h4>
              <p className='category-item-description'>{"Prise de notes en temps réel lors d'observations de comportements d'un individu ou d'une population selon des techniques, spécifiques à l'étude, de prise de notes. (Il faut savoir être rapide, rigoureux et observateur.)"}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RightSection
