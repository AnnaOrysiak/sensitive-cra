import React, { Component } from 'react';
import config from '../utils/config';


class App extends Component {
  state = {}

  componentDidMount() {
    fetch(`${config.baseUri}news`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="">Hello World!</div>
      </>
    );
  }
}

export default App;