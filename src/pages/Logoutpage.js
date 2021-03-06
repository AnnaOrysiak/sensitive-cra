import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../components/Loader';
import '../style/forms.css';

class Logoutpage extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    localStorage.removeItem('state');
    localStorage.removeItem('user');
    setTimeout(() => this.setState({ redirect: true }), 500);
  }

  render() {
    return (
      <>
        <Route
          render={() =>
            !this.state.redirect ? (
              <div>
                <h3>Wylogowano</h3>
                <Loader />
              </div>
            ) : (
              <Redirect to="/sensitive-cra/" />
            )
          }
        />
      </>
    );
  }
}

export default Logoutpage;
