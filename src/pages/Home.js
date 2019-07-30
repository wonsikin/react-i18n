import React from 'react';
import { withTranslation } from "react-i18next";
import logo from '../logo.svg';
import '../App.css';

function Home({ t }) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{t('home:Welcome to React')}</h2>
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withTranslation(['home'])(Home);
