import React, {Component} from 'react'
import mockDatabase from './mockDatabase.json'
import Profile from './Profile.js'

class Swiper extends Component {
  

  render () {
    let userEmail = 'logan@example.com';
    const userData = mockDatabase.users.filter(user => user.emailAddress === userEmail);
    const userData2 = mockDatabase.users.filter(user => user.emailAddress === 'jbussard@ucsc.edu');
  
    return (
      <div className="swiperContainer">
      <Profile userProfile={userData}></Profile>
      <button>Invite to project</button>
      <button>See next hacker</button>
      <br/>
      <hr/>
      <Profile userProfile={userData2}></Profile>
      <button>Invite to project</button>
      <button>See next hacker</button>
      <br/>
      <hr/>
      </div>
    )

  }
}

export default Swiper