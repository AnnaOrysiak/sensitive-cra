import React, { Component } from 'react';
import Story from '../components/Story';
import Loader from '../components/Loader';
import storyApi from '../api/storyApi';

class Storypage extends Component {
  state = {
    story: [],
  }

  fetchNewStory = () => {
    const id = this.props.match.params.id;
    storyApi.getStoryById(id)
      .then(data => this.setState({ story: data }))
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
