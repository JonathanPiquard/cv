
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import BadgeList from '../../../../components/BadgeList';

import styles from './styles.scss';


@translate()
class RightSection extends Component {

  render() {
    const { t } = this.props;

    return (
      <section id='rightSection'>
        <div id='webProjects' className='category'>
          <h3 className='category-title'>{t('rightSection.webProjects.title')}<span className='category-title-mention'> | {t('rightSection.webProjects.mention')}</span></h3>
          <div className='category-items'>

            <div className='category-item'>
              <h4 className='category-item-title'>Cinetic<span className='category-item-title-mention'> | {t('rightSection.webProjects.items.cinetic.status')}</span></h4>
              <p className='category-item-description'>{t('rightSection.webProjects.items.cinetic.description')}</p>
              <BadgeList technologies badges={['React', 'React Native', 'ES6', 'GraphQL', 'Apollo Client', 'Node.js', 'Webpack v2']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>{t('rightSection.webProjects.items.scientific-poster.title')}<span className='category-item-title-mention'> | {t('rightSection.webProjects.items.scientific-poster.status')}</span></h4>
              <p className='category-item-description'>{t('rightSection.webProjects.items.scientific-poster.description')}</p>
              <BadgeList technologies badges={['React', 'ES6', 'Webpack v2', 'Material-UI', 'GIMP']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Web Conception<a href='https://webconception.fr' className='category-item-title-mention'> | webconception.fr</a></h4>
              <p className='category-item-description'>{t('rightSection.webProjects.items.webconception.description')}</p>
              <BadgeList technologies badges={['jQuery', 'Bootstrap', 'PHP']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Talented<span className='category-item-title-mention'> | {t('rightSection.webProjects.items.talented.status')}</span></h4>
              <p className='category-item-description'>{t('rightSection.webProjects.items.talented.description')}</p>
              <BadgeList technologies badges={['React', 'React Native', 'Redux', 'ES6', 'Feathers.js', 'Mongoose', 'Passport.js', 'GIMP']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>GMAO Tailor<span className='category-item-title-mention'> | {t('rightSection.webProjects.items.gmao-tailor.status')}</span></h4>
              <p className='category-item-description'>{t('rightSection.webProjects.items.gmao-tailor.description')}</p>
              <BadgeList technologies badges={['Node.js', 'Socket.io', 'Angular', 'Angular Material', 'SASS', 'Paper.js', 'CodeMirror', 'Lodash', 'Grunt', 'Bower']} />
            </div>

            <div className='category-item'>
              <h4 className='category-item-title'>Headlings<span className='category-item-title-mention'> | {t('rightSection.webProjects.items.headlings.status')}</span></h4>
              <p className='category-item-description'>{t('rightSection.webProjects.items.headlings.description')}</p>
              <BadgeList technologies badges={['Sails.js', 'Socket.io', 'Angular', 'Bootstrap', 'Passport.js', 'Lodash', 'Grunt']} />
            </div>
          </div>
        </div>

        <div id='languages' className='category'>
          <h3 className='category-title'>{t('rightSection.languages.title')}</h3>
          <div className='category-items'>
            <div className='category-item category-item-with-description'>
              <h4 className='category-item-title'>{t('rightSection.languages.items.english')}</h4>
              <p className='category-item-description'>| CLES 2</p>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('rightSection.languages.items.spanish')}</h4>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default RightSection
