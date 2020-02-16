import React, { Component } from 'react';
import StoriesList from './StoriesList';
import NewsList from './NewsList';
import usersApi from '../../api/usersApi';
import './style/adminpanel.css';

class AdminPanel extends Component {
  state = {
    user: this.props.user,
    authors: []
  };

  componentDidMount() {
    usersApi.getAllUsers().then(data => {
      if (data) {
        this.setState({
          authors: data.map(({ login }) => ({ login }))
        });
      }
    });
  }

  render() {
    return (
      <>
        <div className="adminPanel">
          <h3 className="adminName">{this.state.user}</h3>
          <StoriesList author={this.state.user} authors={this.state.authors} />
          <NewsList />
        </div>
      </>
    );
  }
}

export default AdminPanel;
