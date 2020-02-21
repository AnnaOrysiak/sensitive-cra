import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminPanel from './admin/AdminPanel';

class Adminpage extends Component {
  state = {
    user: ''
  };

  checkPermission = () => {
    return localStorage.getItem('state');
  };

  componentDidMount() {
    this.setState({ user: localStorage.getItem('user') });
  }

  render() {
    return (
      <>
        <Route
          render={() =>
            this.checkPermission() ? (
              <AdminPanel user={this.state.user} />
            ) : (
              <Redirect to="/sensitive-cra/login/" />
            )
          }
        />
      </>
    );
  }
}

export default Adminpage;
