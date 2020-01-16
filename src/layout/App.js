import React, { Component } from 'react';
import config from '../utils/config';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';


class App extends Component {
  state = {
    news: [],
    stories: [],
  }

  componentDidMount() {

    fetch(`${config.baseCorsUrl}news`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .then(data => this.setState({ news: data }))
      .catch(err => console.log(err));

    fetch(`${config.baseCorsUrl}stories`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .then(data => this.setState({ stories: data }))
      .catch(err => console.log(err));

  }

  render() {

    const { news, stories } = this.state

    return (
      <>
        <Navigation stories={stories} />
        <Header />
        <Main content={news} />
        <Footer />
      </>
    );
  }
}

export default App;