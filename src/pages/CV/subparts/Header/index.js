
import React, { Component } from 'react';
import BadgeList from '../../../../components/BadgeList';
import technologiesDetails from '../../../../components/BadgeList/technologiesDetails';

import styles from './styles.scss';


class Header extends Component {

  render() {
    return (
      <header id='header'>
        <div>

          <div>

            <h1>Jonathan Piquard</h1>

            <div>
              <h4>
                <a href='https://webconception.fr/cv'>Version Web | webconception.fr/cv</a>
              </h4>
              <h4>
                <a href='github.com/john/cv'>Code Source | github.com/john/cv</a>
              </h4>
              <BadgeList details={technologiesDetails} badges={['React', 'Webpack v2', 'ES6', 'SASS']} />
            </div>

            <div>
              <h4>
                <a href='mailto:piquard.jonathan@protonmail.com?subject=Candidature&body=Bonjour,'>piquard.jonathan@protonmail.com</a>
              </h4>
              <h4>
                <a href='https://webconception.fr'>webconception.fr</a>
              </h4>
              <h4>
                <a href='tel:+33781018133'>07 81 01 81 33</a>
              </h4>
            </div>

          </div>

          <h2>Front-end Développeur</h2>

        </div>
      </header>
    );
  }
}

export default Header
