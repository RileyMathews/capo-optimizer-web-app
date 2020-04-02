import './index.css';
import './App.css'
import React from 'react';
import Notes from './Notes';
import TranspositionResults from './TranspositionResults';

class App extends React.Component {
  state = {
    message: "hello world",
    inactive: [
      "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"
    ],
    active: [],
    serviceResponse: {
      transpositions: []
    }
  }

  makeNoteActive = (note) => {
    const inactive = this.state.inactive.filter(item => { return item !== note })
    const active = this.state.active
    active.push(note)
    this.setState({
      inactive: inactive,
      active: active
    })
  }

  makeNoteInactive = (note) => {
    const inactive = this.state.inactive
    const active = this.state.active.filter(item => { return item !== note })
    inactive.push(note)
    this.setState({
      inactive: inactive,
      active: active
    })
  }

  optimize = () => {
    const notes = this.state.active.join(",")
    fetch(`https://apigateway.rileymathews.com/capo-optimizer?keys=${notes}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(r => r.json())
      .then(response => {
        this.setState({
          serviceResponse: response
        })
      })
  }

  render() {
    return (
      <div className="top-level-container">
        <div className="notes-container">
          <Notes keys={this.state.inactive} switchState={this.makeNoteActive} />
          <Notes keys={this.state.active} switchState={this.makeNoteInactive} />
        </div>
        <button className="submit-button" onClick={this.optimize}>Optimize!</button>
        <TranspositionResults transpositions={this.state.serviceResponse.transpositions} />
      </div>
    )
  }
}

export default App;
