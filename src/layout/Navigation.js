import React, { Component } from 'react';
import StoryListElement from '../components/StoryListElement';
import Loader from '../components/Loader';
import '../style/navigation.css';

class Navigation extends Component {
  state = {
    active: false,
  }

  navigationHandler = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }



  render() {

    const { stories, getStoryHandler, getNewsHandler } = this.props;

    const goToTheStart = () => {
      getNewsHandler();
      this.navigationHandler();
    };

    let storiesList = [];

    if (stories.length > 0) {
      storiesList = stories.map(story => <StoryListElement key={story._id} storyTitle={story.title} chapterTitle={story.chapter} storyId={story._id} getStoryHandler={getStoryHandler} navigationHandler={this.navigationHandler} />)
    }

    return (
      <nav className={this.state.active ? 'navigation active' : 'navigation'} >
        <div className="btn menu-button" onClick={this.navigationHandler}>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
        </div>
        <div className="menu">
          <section className="icons">
            <button onClick={goToTheStart}><span className="icon">start</span></button>
            <button><span className="icon">login</span></button>
          </section>

          <h3 className="menu__header">Opowiadania</h3>
          <ul className="menu__list">
            {stories.length ? storiesList : <Loader />}
          </ul>
        </div>
      </nav >);
  }
}

export default Navigation;