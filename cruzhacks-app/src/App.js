import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Profile from './Profile';
import ProfileEditor from './ProfileEditor';
import React, { Component } from 'react';
import mockDatabase from './mockDatabase.json'


class App extends Component {
  state = {
    mockDB : mockDatabase
  };
  render() { 
    const {mockDB} = this.state;
    let userEmail = 'juan@example.com';
    const userData = mockDatabase.users.filter(user => user.emailAddress === userEmail)
  
    return (
      <div className="App">
          <p>
            StudentStartUp for finding students to start new projects.
          </p>
         <Profile userProfile={userData} />
         <ProfileEditor userProfile={userData}/>
      </div>
    );
  }
}

export default App;
