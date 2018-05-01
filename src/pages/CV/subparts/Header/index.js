
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import BadgeList from '../../../../components/BadgeList';

import styles from './styles.scss';


@translate()
class Header extends Component {

  render() {
    const { t } = this.props;

    return (
      <header id='header'>
        <div>

          <div>

            <h1>Jonathan Piquard</h1>

            <div>
              <h4>
                <a href='https://webconception.fr/cv'>{t('header.web-version')} | <span>webconception.fr/cv</span></a>
              </h4>
              <h4>
                <a href='https://github.com/JonathanPiquard/cv.git'>{t('header.source-code')} | <span>github.com/JonathanPiquard/cv</span></a>
              </h4>
              <BadgeList technologies badges={['React', 'Webpack v2', 'ES6', 'react-i18next', 'SASS']} />
            </div>

            <div>
              <h4>
                <a href={'mailto:piquard.jonathan@protonmail.com?subject=' + t('header.email.subject') + '&body=' + t('header.email.hello') + ','}>piquard.jonathan@protonmail.com</a>
              </h4>
              <h4>
                <a href='https://webconception.fr'>webconception.fr</a>
              </h4>
              <h4>
                <a href='tel:+33781018133'>{t('header.phone-number')}</a>
              </h4>
            </div>

          </div>

        </div>
      </header>
    );
  }
}

export default Header
