import sampleSize from 'lodash.samplesize';
import React, { Component } from 'react';
import './App.css';

import Cell from './Cell.js';

class App extends Component {
  state = {
    gameStatus: 'challenge', // 'play'
    clickedCells: [],
  };
  cellIds = Array.from({ length: 16 }, (_, i) => i);
  challengeCellIds = sampleSize(this.cellIds, 6);
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        gameStatus: 'play',
      });
    }, 3000);
  }
  isCellActive = id => {
    const isCellChallenge = this.challengeCellIds.indexOf(id) >= 0;
    return isCellChallenge && this.state.gameStatus === 'challenge';
  };
  onCellClick = cellId => {
    const isCellChallenge = this.challengeCellIds.indexOf(cellId) >= 0;
    this.setState({
      clickedCells: [...this.state.clickedCells, cellId],
    });
  };
  render() {
    return (
      <div className="game">
        <div className="help">
          You will have 3 seconds to memorize X blue random cells
        </div>
        <div className="grid challenge">
          {this.cellIds.map(id => {
            const isCellChallenge = this.challengeCellIds.indexOf(id) >= 0;
            const isCellClicked = this.state.clickedCells.indexOf(id) >= 0;

            return (
              <Cell
                key={id}
                id={id}
                onClickAction={this.onCellClick}
                isActive={this.isCellActive(id)}
                isChallenge={isCellChallenge}
                isClicked={isCellClicked}
              />
            );
          })}
        </div>
        <button>Start</button>
        <div className="message">Game Message Here...</div>
      </div>
    );
  }
}

export default App;
