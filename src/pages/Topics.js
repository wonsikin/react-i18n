import React from 'react';
import { withTranslation } from "react-i18next";
import logo from '../logo.svg';
import '../App.css';

function Topics({ t }) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('topics:title')}</p>
      </header>
    </div>
  );
}

export default withTranslation(['topics'])(Topics);
