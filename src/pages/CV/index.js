/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';

import Header from './subparts/Header';
import LeftSection from './subparts/LeftSection';
import RightSection from './subparts/RightSection';

import styles from './styles.scss';


class CV extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id='container'>

        <Header />

        <article>
          <LeftSection />
          <RightSection />
        </article>

      </div>
    );
  }
}

export default CV;
