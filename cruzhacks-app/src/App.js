import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Profile from './Profile';
import ProfileEditor from './ProfileEditor';
import React, { Component } from 'react';
import mockDatabase from './mockDatabase.json'
import Swiper from './Swiper';
import NavButtons from './NavButtons.tsx';


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
          <h1>Your Profile</h1>
      <h1 style={{backgroundColor: "yellow", color:"green"}}>Profile component</h1>
         <Profile userProfile={userData}/>
         <br/>
      <h1 style={{backgroundColor: "yellow", color:"green"}}>ProfileEditor component</h1>
         <ProfileEditor userProfile={userData}/>
         <br/>
      <h1 style={{backgroundColor: "yellow", color:"green"}}>Swiper component</h1>
         <Swiper/>
      </div>
    );
  }
}

export default App;
