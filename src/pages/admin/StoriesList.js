import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../components/Loader';
import StoryElement from './components/StoryElement';
import EditStory from './EditStory';
import storyApi from '../../api/storyApi';

class StoriesList extends Component {
  state = {
    stories: [],
    editmode: false,
    edit_content: {}
  }

  generateStoriesList = () => {
    return this.state.stories.map(story => <StoryElement
      key={story._id}
      id={story._id}
      title={story.title}
      chapter_title={story.chapter_title}
      visible={story.visible}
      handleDeleteStory={this.handleDeleteStory}
      handleUpdateStory={this.handleUpdateStory}
      handleEditStory={() => this.handleEditStory(story)}
    />)
  }

  deleteStoryFromState = (id) => {
    this.setState(prevState => ({
      stories: prevState.stories.filter(story => story._id !== id && story)
    }))
  }

  updateStoryFromState = (id) => {
    this.setState((prevState) => ({
      stories: prevState.stories.map(story => story._id === id ?
        { ...story, visible: !story.visible } :
        story)
    }))
  }

  handleDeleteStory = (id = '') => {
    this.deleteStoryFromState(id);
    storyApi.deleteStoryById(id)
  }

  handleUpdateStory = (id = '', data = {}) => {
    this.updateStoryFromState(id);
    storyApi.updateStoryById(id, data)
  }

  handleEditStory = (props = '') => {
    this.setState({
      editmode: true,
      edit_content: props
    })
  }

  componentDidMount() {
    storyApi.getStoriesByAuthor(this.props.author)
      .then(data => this.setState({ stories: data }))
  }

  render() {
    return (
      <>
        <div className='adminStories'>
          {this.state.editmode && <EditStory
            content={this.state.edit_content !== '' ?
              this.state.edit_content :
              null} />}
          <h3>Twoja twórczość</h3>
          {this.state.stories.length > 0 ?
            this.generateStoriesList() :
            <Loader />}
          <div className="addListItem">
            <button
              className='listBtn'
              onClick={() => this.handleEditStory('')}>
              <FontAwesomeIcon icon="plus" />
            </button>
            <p className="storyListItem__title">Nowy tytuł</p>
          </div>
        </div>
      </>
    );
  }
}

export default StoriesList;