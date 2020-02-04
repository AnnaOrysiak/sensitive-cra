import React, { Component } from 'react';
import News from '../components/News';
import Loader from '../components/Loader';
import newsApi from '../api/newsApi';
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
    newsApi.getAllNews()
      .then(data => this.setState({ news: data }))
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