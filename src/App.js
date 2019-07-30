import React, {
  Suspense
} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Header from './components/Header';

function Page() {
  return (
    <Router>
      <Header />

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
    </Router>
  )
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
