import React, { Component } from 'react';
import StoriesList from './StoriesList';
import NewsList from './NewsList';
import './style/adminpanel.css';

class AdminPanel extends Component {
  state = {
    user: this.props.user,
  }

  render() {
    return (
      <>
        <div className="adminPanel">
          <h3 className="adminName">{this.state.user}</h3>
          <StoriesList author={this.state.user} />
          <NewsList />
        </div>
      </>
    );
  }
}

export default AdminPanel;