import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';


class App extends Component {
  render() {

    return (
      <Router>
        <nav className='navigation'>
          {<Navigation />}
        </nav>
        <header className="banner">
          {<Header />}
        </header>
        <main className="mainContainer">
          {<Page />}
        </main>
        <footer className="footer">
          {<Footer />}
        </footer>
      </Router>
    );
  }
}

export default App;