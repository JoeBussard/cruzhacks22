import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Profile from './Profile';
import React, { Component } from 'react';


class App extends Component {
  state = {
    testProfileJoe : [
      {
      "firstName": "Joe",
      "lastName": "Bussard",
      "headline": "Recent Grad",
      "emailAddress": "jbussard@ucsc.edu",
      "interests": [
        "Free Software",
        "Web Apps"],
      "city": "Los Angeles",
      "state": "California",
      "skills": [
        "Linux",
        "git",
        "JSON"]
      }
    ]
  };
  render() { 
    const {testProfileJoe} = this.state;
  
    return (
      <div className="App">
          <p>
            StudentStartUp for finding students to start new projects.
          </p>
         <Profile userEmail="juan@example.com" />
      </div>
    );
  }
}

export default App;
