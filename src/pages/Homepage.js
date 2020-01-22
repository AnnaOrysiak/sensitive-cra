import React, { Component } from 'react';
import News from '../components/News';
import Loader from '../components/Loader';
import config from '../utils/config';
import '../style/main.css';

class Homepage extends Component {
  state = { news: [] }

  generateNews = () => {
    const newsTemplates = this.state.news.map(news =>
      <News key={news._id} title={news.title} date={news.date} description={news.description} />
    )
    return newsTemplates;
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
  }

  render() {
    return (
      <>
        {this.state.news.length ? this.generateNews() : <Loader />}
      </>
    );
  }
}

export default Homepage;