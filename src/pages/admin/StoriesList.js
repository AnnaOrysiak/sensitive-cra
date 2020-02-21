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
    edit_content: {},
    authors: []
  };

  storyModel = {
    _id: 'new',
    type: '',
    title: '',
    chapter_title: false,
    content: '',
    authors: this.state.authors
  };

  generateStoriesList = () => {
    return this.state.stories.map(story => (
      <StoryElement
        key={story._id}
        story={story}
        handleDeleteStory={this.handleDeleteStory}
        handleUpdateStory={this.handleUpdateStory}
        handleEditStory={() => this.handleEditStory(story)}
      />
    ));
  };

  getStoriesByAuthor = author => {
    storyApi
      .getStoriesByAuthor(author)
      .then(data => this.setState({ stories: data }));
  };

  deleteStoryFromState = id => {
    this.setState(prevState => ({
      stories: prevState.stories.filter(story => story._id !== id && story)
    }));
  };

  updateStoryFromState = id => {
    this.setState(prevState => ({
      stories: prevState.stories.map(story =>
        story._id === id ? { ...story, visible: !story.visible } : story
      )
    }));
  };

  handleDeleteStory = (id = '') => {
    this.deleteStoryFromState(id);
    storyApi.deleteStoryById(id);
  };

  handleUpdateStory = (id = '', data = {}) => {
    this.updateStoryFromState(id);
    storyApi.updateStoryById(id, data);
  };

  handleEditStory = (props = '') => {
    // czy można to jakoś ulepszyć?
    this.setState({
      editmode: true,
      edit_content: props
    });
  };

  closeEditStory = () => {
    this.setState({
      editmode: false,
      editContent: this.storyModel
    });
  };

  componentDidMount() {
    this.getStoriesByAuthor(this.props.author);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.author !== this.props.author) {
      this.getStoriesByAuthor(this.props.author);
      this.setState({ authors: [...this.state.authors, this.props.author] });
    }
  }

  render() {
    return (
      <>
        <div className="adminStories">
          {this.state.editmode && (
            <EditStory
              author={this.props.author}
              allAuthors={this.props.allAuthors}
              editContent={
                // czy to jest konieczne?
                this.state.edit_content !== '' ? this.state.edit_content : ''
              }
              closeEditStory={this.closeEditStory}
            />
          )}
          <h3>Twoja twórczość</h3>
          {this.state.stories.length > 0 ? (
            this.generateStoriesList()
          ) : (
            <Loader />
          )}
          <div className="addListItem">
            <button
              className="listBtn"
              onClick={() => this.handleEditStory(this.storyModel)}
            >
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
