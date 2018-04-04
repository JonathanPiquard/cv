
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import BadgeList from '../../../../components/BadgeList';

import styles from './styles.scss';


@translate()
class LeftSection extends Component {

  render() {
    const { t } = this.props;

    return (
      <section id='leftSection'>
        <div className='category'>
          <h3 className='category-title'>{t('leftSection.about-me.title')}</h3>
          <p className='category-description'>{t('leftSection.about-me.description')}</p>
        </div>

        <div className='category'>
          <h3 className='category-title'>{t('leftSection.experience.title')}</h3>
          <div className='category-items'>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.experience.items.bonitasoft.title')}</h4>
              <h5 className='category-item-subtitle'>Bonitasoft | <span className='category-item-subtitle-mention'>{t('leftSection.experience.items.bonitasoft.period')}</span></h5>
              <p className='category-item-description'>{t('leftSection.experience.items.bonitasoft.description', { returnObjects: true }).map((str) => (str === '_GWT_') ? <span style={{textDecoration: 'line-through'}} key="GWT">GWT</span> : str)}</p>
              <BadgeList technologies badges={['React', 'Vuejs', 'ES6', 'Confluence', 'Gradle', 'Async.js']} />
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.experience.items.rider.title')}</h4>
              <h5 className='category-item-subtitle'>Deliveroo | <span className='category-item-subtitle-mention'>{t('leftSection.experience.items.rider.period')}</span></h5>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.experience.items.micro-entrepreneur.title')}</h4>
              <h5 className='category-item-subtitle'>Web Conception | <span className='category-item-subtitle-mention'>{t('leftSection.experience.items.micro-entrepreneur.period')}</span></h5>
              <p className='category-item-description'>{t('leftSection.experience.items.micro-entrepreneur.description')}</p>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.experience.items.computer-seller.title')}</h4>
              <h5 className='category-item-subtitle'>E.Leclerc | <span className='category-item-subtitle-mention'>{t('leftSection.experience.items.computer-seller.period')}</span></h5>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.experience.items.product-factor.title')}</h4>
              <h5 className='category-item-subtitle'>Argru | <span className='category-item-subtitle-mention'>{t('leftSection.experience.items.product-factor.period')}</span></h5>
            </div>
          </div>
        </div>

        <div className='category'>
          <h3 className='category-title'>{t('leftSection.studies.title')}</h3>
          <div className='category-items'>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.studies.items.M1-info.title')}</h4>
              <h5 className='category-item-subtitle'>{t('leftSection.studies.items.M1-info.location')} | <span className='category-item-subtitle-mention'>2017 - 2018</span></h5>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.studies.items.biology-licence.title')}</h4>
              <h5 className='category-item-subtitle'>{t('leftSection.studies.items.biology-licence.location')} | <span className='category-item-subtitle-mention'>2014 - 2017</span></h5>
              <p className='category-item-description'>{t('leftSection.studies.items.biology-licence.description')}</p>
            </div>
            <div className='category-item'>
              <h4 className='category-item-title'>{t('leftSection.studies.items.bac.title')}</h4>
              <h5 className='category-item-subtitle'>{t('leftSection.studies.items.bac.location')} | <span className='category-item-subtitle-mention'>2011 - 2014</span></h5>
            </div>
          </div>
        </div>

        {
          /*
            <div className='category'>
              <h3 className='category-title'>{t('leftSection.hobbies.title')}</h3>
              <div className='category-items'>
                <BadgeList badges={["cyclism", "running", "art", "literature", "philosophy", "cinema", "short-film", "sciences"].map((hobby) => t('leftSection.hobbies.items.' + hobby))} />
              </div>
            </div>
          */
        }

      </section>
    );
  }
}

export default LeftSection
