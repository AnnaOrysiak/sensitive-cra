import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

class Adminpage extends Component {
  state = {}

  checkPermission = () => {
    console.log("checking permission");

  }

  render() {
    return (
      <>
        <Route render={() => (
          permission ? (<h3>Panel admina - dzień dobry</h3>) : (<Redirect to="/sensitive-cra/login/" permission={this.checkPermission} />)
        )} />
      </>
    );
  }
}

export default Adminpage;