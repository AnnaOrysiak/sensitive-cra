import React, { Component } from 'react';
import Story from '../components/Story';
import '../style/navigation.css';

class Navigation extends Component {
  state = {
    active: false,
  }

  navigationHandler = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {

    const { stories } = this.props;

    console.log(stories.length);
    let storiesList = [];

    if (stories.length > 0) {
      storiesList = stories.map(story => <Story key={story._id} storyTitle={story.title} />)
    }

    return (
      <nav className={this.state.active ? 'navigation active' : 'navigation'} >
        <div className="btn menu-button" onClick={this.navigationHandler}>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
        </div>
        <div className="menu">
          <span className="icon">start / </span>
          <span className="icon">login</span>
          <h3>Opowiadania</h3>
          <ul className="list">
            {storiesList}
          </ul>
        </div>
      </nav >);
  }
}

export default Navigation;