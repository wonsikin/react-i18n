import React from "react";
import { Link } from "react-router-dom";

import i18n from '../i18n';

export default class Header extends React.Component {
  handleClick(language) {
    console.log("this is:", language);
    i18n.changeLanguage(language)
    .then((t) => {
      t('key'); // -> same as i18next.t
    });
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <button onClick={() => this.handleClick('en')}>English</button>
        <button onClick={() => this.handleClick('zh-hans')}>简体中文</button>
      </div>
    );
  }
}