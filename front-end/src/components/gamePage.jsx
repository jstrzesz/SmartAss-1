import React from 'react';
import Timer from './timer.jsx';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    }
    this.toggleSelector = this.toggleSelector.bind(this);
    this.color = this.color.bind(this);
  }
  
  toggleSelector(position) {
    if (this.state.active === position) {
      this.setState({active: null})
    } else {
      this.setState({active: position})
    }
  }

  color(position) {
    if (this.state.active === position) {
      return '#87FDFD'
    }
    return '';
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Question #</h2>
            <p>What real-world event is thought to be the inspiration for the destruction of Atlantis?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <tbody>
                <tr className="first-option">
                  <td>A</td>
                  <td style={{background: this.color(0)}} onClick={() => this.toggleSelector(0)}>Eruption of Mount Vesuvius</td>
                </tr>
                <tr className="second-option">
                  <td>B</td>
                  <td>The siege of Troy</td>
                </tr>
                <tr className="third-option">
                  <td>C</td>
                  <td>The minoan eruption of Santorini</td>
                </tr>
                <tr className="fourth-option">
                  <td>D</td>
                  <td>The asteroid that killed the dinosaurs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <Timer />
            <div>
              <h3>Score: {}</h3>
            </div>
            {/* <h2>Time Limit:</h2>
            <p>20 seconds</p> */}
          </div>
        </div>
      </div>
    )
  }
}

export default GamePage;