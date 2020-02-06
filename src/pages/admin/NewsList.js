import React, { Component } from 'react';
import NewsElement from './components/NewsElement';
import newsApi from '../../api/newsApi';
import Loader from '../../components/Loader';

class NewsList extends Component {
  state = {
    news: []
  }

  generateNewsList = () => {
    return this.state.news.map(item => <NewsElement key={item.date} title={item.title} date={item.date} id={item._id} handleDeleteNews={this.handleDeleteNews} />)
  }

  deleteNewsFromState = (id) => {
    this.setState(prevState => ({
      news: prevState.news.filter(item => item._id !== id && item)
    }))
  }

  handleDeleteNews = (id = '') => {
    this.deleteNewsFromState(id);
    newsApi.deleteNewsById(id)
  }

  componentDidMount() {
    newsApi.getAllNews()
      .then(data => this.setState({ news: data }))
  }

  render() {
    return (
      <>
        <div className='adminNews'>
          <h3>News</h3>
          {this.state.news.length > 0 ? this.generateNewsList() : <Loader />}
        </div>
      </>
    );
  }
}

export default NewsList;