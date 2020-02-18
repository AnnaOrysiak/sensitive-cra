import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faHome,
  faUser,
  faPowerOff,
  faSun,
  faMoon,
  faEye,
  faEyeSlash,
  faTrash,
  faEdit,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import Kitty from './Kitty';
import '../style/app.css';

library.add(
  faChevronLeft,
  faChevronRight,
  faHome,
  faUser,
  faPowerOff,
  faSun,
  faMoon,
  faEye,
  faEyeSlash,
  faTrash,
  faEdit,
  faPlus,
  faTimes
);

class App extends Component {
  state = {
    lightMode: false
  };

  handleColorMode = () => {
    this.setState(prevState => ({ lightMode: !prevState.lightMode }));
  };

  render() {
    return (
      <Router>
        <div
          className={
            this.state.lightMode ? 'appContainer light-mode' : 'appContainer'
          }
        >
          <nav className="navigation">
            {
              <Navigation
                changeColor={this.handleColorMode}
                lightMode={this.state.lightMode}
              />
            }
          </nav>
          <header className="banner">{<Header />}</header>
          <main className="mainContainer">{<Page />}</main>
          <footer className="footer">{<Footer />}</footer>
          <Kitty />
        </div>
      </Router>
    );
  }
}

export default App;
