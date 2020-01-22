import React, { Component } from 'react';
import Story from '../components/Story';
import Loader from '../components/Loader';
import config from '../utils/config';

class Storypage extends Component {
  state = {
    story: [],
  }

  fetchNewStory = () => {
    const id = this.props.match.params.id;
    fetch(`${config.baseCorsUrl}story/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .then(data => this.setState({ story: data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchNewStory();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchNewStory();
    }
  }

  render() {
    const { story } = this.state;

    return (
      <>
        {story._id ? <Story story={story} /> : <Loader />}
      </>
    );
  }
}

export default Storypage;
