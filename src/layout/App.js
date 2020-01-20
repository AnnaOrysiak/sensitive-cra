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
    story: [],
    storyContent: false,
  }

  getNewsHandler = () => {
    this.setState({ storyContent: false })
  }

  getStoryHandler = (e) => {
    console.log(e.target.value);

    const id = e.target.value;

    fetch(`${config.baseCorsUrl}story/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .then(data => this.setState({
        story: [data],
        storyContent: true
      }))
      .catch(err => console.log(err));

  }

  componentDidMount() {

    // use HOF

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

    const { news, stories, story, storyContent } = this.state

    return (
      <>
        <Navigation stories={stories} getStoryHandler={this.getStoryHandler} getNewsHandler={this.getNewsHandler} />
        <Header />
        <Main storyContent={storyContent} content={storyContent ? story : news} />
        <Footer />
      </>
    );
  }
}

export default App;