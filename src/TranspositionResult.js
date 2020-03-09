import React from 'react';
import './TranspositionResult.css'

class TranspositionResult extends React.Component {
  render() {
    return(
      <div className="transposition-results-container">
        <div className="transpositon-result">
          capo: {this.props.transposition.stepsDown}. Keys: 
          {this.props.transposition.newSong.keys.map((key, i) => {
            return <span key={i}> {key.root}</span>
          })}
        </div>
      </div>
    )
  }
}

export default TranspositionResult
