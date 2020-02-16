import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminPanel from './admin/AdminPanel';

class Adminpage extends Component {
  state = {
    user: 'Admin'
  };

  checkPermission = () => {
    return localStorage.getItem('state');
  };

  render() {
    return (
      <>
        <Route
          render={() =>
            this.checkPermission() ? (
              <AdminPanel user={this.state.user} />
            ) : (
              <Redirect
                to="/sensitive-cra/login/"
                permission={this.checkPermission}
              />
            )
          }
        />
      </>
    );
  }
}

export default Adminpage;
