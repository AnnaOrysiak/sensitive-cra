import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../components/Loader';
import StoryList from '../components/StoryList';
import storyApi from '../api/storyApi';
import '../style/navigation.css';

class Navigation extends Component {
  state = {
    active: false,
    stories: [],
  }

  navigationHandler = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  checkPermission = () => {
    return localStorage.getItem('state')
  }

  componentDidMount() {
    storyApi.getAllStories()
      .then(data => this.setState({ stories: data }))
  }


  render() {
    return (
      <>
        <div className={this.state.active ? 'menu active' : 'menu'}>

          <section className="icons">
            <NavLink
              to='/sensitive-cra/'
              onClick={this.navigationHandler}
              exact>
              <FontAwesomeIcon icon="home" size="2x" />
            </NavLink>
            <NavLink
              to='/sensitive-cra/admin'
              onClick={this.navigationHandler}>
              <FontAwesomeIcon icon="user" size="2x" />
            </NavLink>
            {
              this.checkPermission() &&
              <NavLink
                to='/sensitive-cra/logout'
                onClick={this.navigationHandler}>
                <FontAwesomeIcon icon="power-off" size="2x" />
              </NavLink>
            }

            <button className='btn' onClick={this.props.changeColor}>
              <FontAwesomeIcon icon={this.props.lightMode ? 'moon' : 'sun'} size="2x" />
            </button>
          </section>

          <h3 className="menu__header">Opowiadania</h3>
          {this.state.stories.length ?
            <StoryList
              stories={this.state.stories}
              navigationHandler={this.navigationHandler} />
            : <Loader />}
        </div>

        <div
          className={this.state.active ? 'btn menu-button active' : 'btn menu-button'}
          onClick={this.navigationHandler}>
          {/* <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span>
          <span className="menu-button__bar"></span> */}
          <FontAwesomeIcon icon="chevron-right" size="2x" />
        </div>
      </>);
  }
}

export default Navigation;