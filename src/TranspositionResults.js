import React from 'react';
import "./TranspositionResults.css"
import TranspositionResult from './TranspositionResult'

class TranspositionResults extends React.Component {
  render() {
    return(
      <div className="transposition-results-container">
        {this.props.transpositions.map((transposition, i) => {
          return <TranspositionResult transposition={transposition} key={i}/>
        })}
      </div>
    )
  }
}

export default TranspositionResults
