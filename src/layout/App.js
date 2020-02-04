import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import '../style/app.css';

class App extends Component {
  state = {
    lightMode: false
  }

  handleColorMode = () => {
    this.setState((prevState) => ({ lightMode: !prevState.lightMode }))
  }

  render() {

    return (
      <Router>
        <div className={this.state.lightMode ? 'appContainer light-mode' : 'appContainer'}>
          <nav className='navigation'>
            {<Navigation changeColor={this.handleColorMode} />}
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
        </div>
      </Router>
    );
  }
}

export default App;