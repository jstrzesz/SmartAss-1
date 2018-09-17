import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignUp from './sign_up.jsx';
import GameCreation from './gameCreation.jsx';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container-fluid">
        <h1>Smart-Ass™</h1>
        <h2>A Trivia Game</h2>
        <h3>© 2018</h3>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <h3>Leader Board</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Rank</th>
                      <th>Wins</th>
                      <th>Losses</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jstrzesz</td>
                      <td>1</td>
                      <td>4</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-4">
                <h3>Log In</h3>
                <form role="form">
                  <div className="form-group">
                    <label>
                      Username
                  </label>
                    <input type="email" className="form-control" id="UsernameInput" />
                  </div>
                  <div className="form-group">
                    <label>
                      Email address
                  </label>
                    <input type="email" className="form-control" id="EmailInput" />
                  </div>
                  <div className="form-group">
                    <label>
                      Password
                  </label>
                    <input type="password" className="form-control" id="PasswordInput" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </form>
                <h4>New Players</h4>
                <h5>Not a player? Sign Up Here </h5>
                <BrowserRouter>
                  <Link to="/sign_up">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                  </Link>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}