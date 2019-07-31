import React from "react";
import { withTranslation } from "react-i18next";
import logo from "../logo.svg";
import "../App.css";

function About({ t }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("about:title")}</p>
        <p>{t("about:I.AM", { name: "Arthur" })}</p>
      </header>
    </div>
  );
}

export default withTranslation(["about"])(About);
