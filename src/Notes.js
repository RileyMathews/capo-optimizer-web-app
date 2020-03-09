import React from 'react';
import './Notes.css'

class Notes extends React.Component {
  render() {
    return(
      <div className="notes">
        {this.props.keys.map((key, i) => {
          return <div key={i} className="note" onClick={() => this.props.switchState(key)}>{key}</div>
        })}
      </div>
    )
  }
}

export default Notes
