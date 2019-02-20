import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
// import students from './reducers/students';
import {Route} from 'react-router-dom'
import StudentPage from './StudentPage'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to ="students">Students</Link>

        <Route  path="/students" component={StudentPage} />

      </div>
    );
  }
}

export default App;
