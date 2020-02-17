import React, { Component } from 'react';
import StoriesList from './StoriesList';
import NewsList from './NewsList';
import usersApi from '../../api/usersApi';
import './style/adminpanel.css';

class AdminPanel extends Component {
  state = {
    user: this.props.user,
    allAuthors: []
  };

  componentDidMount() {
    usersApi.getAllUsers().then(data => {
      if (data) {
        return this.setState({
          allAuthors: data.map(({ login }) => ({ login }))
        });
      }
    });
  }

  render() {
    return (
      <>
        <div className="adminPanel">
          <h3 className="adminName">{this.state.user}</h3>
          <StoriesList
            author={this.state.user}
            allAuthors={this.state.allAuthors}
          />
          <NewsList />
        </div>
      </>
    );
  }
}

export default AdminPanel;
