import React, { Component } from 'react';
import News from './components/News';
import newsApi from '../../api/newsApi';
import Loader from '../../components/Loader';

class NewsList extends Component {
  state = {
    news: []
  }
  componentDidMount() {
    newsApi.getAllNews()
      .then(data => this.setState({ news: data }))
  }

  generateNews = () => {
    return this.state.news.map(item => <News key={item.date} title={item.title} date={item.date} id={item._id} />)
  }

  render() {
    return (
      <>
        <div className='adminNews'>
          <h3>News</h3>
          {this.state.news.length > 0 ? this.generateNews() : <Loader />}
        </div>
      </>
    );
  }
}

export default NewsList;