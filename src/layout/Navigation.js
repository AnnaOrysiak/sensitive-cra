import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../components/Loader';
import StoryList from '../components/StoryList';
import config from '../api/config';
import storyApi from '../api/storyApi';
import '../style/navigation.css';

class Navigation extends Component {
  state = {
    active: false,
    stories: []
  };

  navigationHandler = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  checkPermission = () => {
    return localStorage.getItem('state');
  };

  componentDidMount() {
    storyApi.getAllStories().then(data => this.setState({ stories: data }));
  }

  render() {
    return (
      <>
        <div className={this.state.active ? 'menu active' : 'menu'}>
          <section className="icons">
            <NavLink
              to="/sensitive-cra/"
              onClick={this.navigationHandler}
              className="btn"
              exact
            >
              <FontAwesomeIcon icon="home" size="2x" />
              <span className="description">Start</span>
            </NavLink>

            <NavLink
              to="/sensitive-cra/admin"
              onClick={this.navigationHandler}
              className="btn"
            >
              <FontAwesomeIcon icon="user" size="2x" />
              <span className="description">Panel użytkownika</span>
            </NavLink>

            {window.innerWidth > config.desktopSize && this.checkPermission() && (
              <NavLink
                to="/sensitive-cra/logout"
                onClick={this.navigationHandler}
                className="btn"
              >
                <FontAwesomeIcon icon="power-off" size="2x" />
                <span className="description">Wyloguj</span>
              </NavLink>
            )}

            <button className="btn" onClick={this.props.changeColor}>
              <FontAwesomeIcon
                icon={this.props.lightMode ? 'moon' : 'sun'}
                size="2x"
              />
              <span className="description">
                Motyw {this.props.lightMode ? 'ciemny' : 'jasny'}
              </span>
            </button>
          </section>

          <h3 className="menu__header">Opowiadania</h3>
          {this.state.stories.length ? (
            <StoryList
              stories={this.state.stories}
              navigationHandler={this.navigationHandler}
            />
          ) : (
            <Loader />
          )}
        </div>

        <div
          className={
            this.state.active ? 'btn menu-button active' : 'btn menu-button'
          }
          onClick={this.navigationHandler}
        >
          <FontAwesomeIcon icon="chevron-right" size="2x" />
        </div>
      </>
    );
  }
}

export default Navigation;
