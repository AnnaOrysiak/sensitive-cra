import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this));
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        className="listBtn"
        onClick={() => {
          this.props.handleEditStory();
          this.scrollToTop();
        }}
      >
        <FontAwesomeIcon icon={this.props.id !== 'new' ? 'edit' : 'plus'} />
      </button>
    );
  }
}

export default EditButton;
