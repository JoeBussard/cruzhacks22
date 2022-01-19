import React, {Component} from 'react'
import mockDatabase from './mockDatabase.json'
import Profile from './Profile.js'

class Swiper extends Component {

  swipeLeftAlert() {
    alert("You've swiped left!");
  }

  render () {
    let userEmail = 'logan@example.com';
    const userData = mockDatabase.users.filter(user => user.emailAddress === userEmail);

    return (
      <div className="swiperContainer">
        <Profile userProfile={userData}></Profile>
        <button id='swipeLeft' onClick={this.swipeLeftAlert}>See next hacker</button>
        <button id='swipeRight'>Invite to project</button>
      </div>
    )
  }
}

export default Swiper
