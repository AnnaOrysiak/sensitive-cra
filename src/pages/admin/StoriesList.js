import React, { Component } from 'react';
import Loader from '../../components/Loader';
import StoryElement from './components/StoryElement';
import storyApi from '../../api/storyApi';

class StoriesList extends Component {
  state = {
    stories: [],
  }

  generateStoriesList = () => {
    return this.state.stories.map(story => <StoryElement
      key={story._id}
      title={story.title}
      chapter_title={story.chapter_title}
      visible={story.visible}
    />)
  }

  componentDidMount() {
    storyApi.getStoriesByAuthor(this.props.author)
      .then(data => this.setState({ stories: data }))
  }

  render() {
    return (
      <>
        <div className='adminStories'>
          <h3>Twoja twórczość</h3>
          {this.state.stories.length > 0 ? this.generateStoriesList() : <Loader />}
        </div>
      </>
    );
  }
}

export default StoriesList;