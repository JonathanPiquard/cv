
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance

import App from './App';
import styles from './styles.scss';


const render = (Component) => ReactDOM.render(
  <AppContainer>
    <I18nextProvider i18n={i18n}>
      <Component/>
    </I18nextProvider>
  </AppContainer>,
  document.getElementById('root')
);

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
