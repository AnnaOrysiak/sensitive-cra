import React, { Component } from 'react';
import Loader from '../../components/Loader';
import StoryElement from './components/StoryElement';

class StoriesList extends Component {
  state = {
    stories: [],
  }

  generateStoriesList = () => {
    return this.state.stories.map(story => <StoryElement
      key={story.id}
      title={story.title}
      visible={story.visible}
    />)
  }

  componentDidMount() {

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