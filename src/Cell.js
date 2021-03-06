import React, { Component } from 'react';

const bgColors = {
  normal: 'white',
  challenge: 'lightblue',
  correct: 'lightgreen',
  wrong: 'pink',
};

class Cell extends Component {
  status = () => {
    if (this.props.isActive) {
      return 'challenge';
    }

    if (this.props.isClicked) {
      return this.props.isChallenge ? 'correct' : 'wrong';
    }

    return 'normal';
  };
  handleClick = () => {
    this.props.onClickAction(this.props.id);
    // console.log(this.props);
    // console.log('Clicked', this.props.id);
  };
  render() {
    return (
      <div
        className="cell"
        style={{ width: '25%', backgroundColor: bgColors[this.status()] }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Cell;
