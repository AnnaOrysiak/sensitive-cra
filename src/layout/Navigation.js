import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import StoryListElement from '../components/StoryListElement';
import Loader from '../components/Loader';
import config from '../utils/config';
import '../style/navigation.css';

class Navigation extends Component {
  state = {
    active: false,
    stories: [],
  }

  navigationHandler = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  getStoriesList = () => {
    const storiesList = this.state.stories.map((story) =>
      <li key={story._id}>
        <NavLink to={`/sensitive-cra/story/${story._id}`} id={story._id} onClick={this.navigationHandler}>{story.chapter_title} {story.title} </NavLink>
      </li>
    )

    return storiesList;
  }

  componentDidMount() {
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

    return (
      <>
        <div className={this.state.active ? 'btn menu-button active' : 'btn menu-button'} onClick={this.navigationHandler}>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
        </div>
        <div className={this.state.active ? 'menu active' : 'menu'}>
          <section className="icons">
            <NavLink to='/sensitive-cra/' onClick={this.navigationHandler} exact><span className="icon">start</span></NavLink>
            <NavLink to='/sensitive-cra/admin' onClick={this.navigationHandler}><span className="icon">login</span></NavLink>
          </section>

          <h3 className="menu__header">Opowiadania</h3>
          <ul className="menu__list">
            {this.state.stories.length ? this.getStoriesList() : <Loader />}
          </ul>
        </div>
      </>);
  }
}

export default Navigation;