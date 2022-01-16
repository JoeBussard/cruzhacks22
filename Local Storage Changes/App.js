import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Profile from './Profile';
import React, { Component} from 'react';
import mockDatabase from './mockDatabase.json'
import TestButton from './TestButton';
import useLocalStorage from './useLocalStorage';


class App extends Component {
  state = {
    mockDB : mockDatabase,
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  };
  render() { 
    const {mockDB} = this.state;
    let userEmail = 'juan@example.com';
    const userData = mockDatabase.users.filter(user => user.emailAddress === userEmail)
    const { characters } = this.state
  
    return (
      <div className="App">
          <p>
            StudentStartUp for finding students to start new projects.
          </p>
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <TestButton handleSubmit={this.handleSubmit} />
            <input type="button" value="Submit" onClick={this.submitForm} />
          </div>

         <Profile userProfile={userData} />

      </div>
    );
  }
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
}


export default App;
