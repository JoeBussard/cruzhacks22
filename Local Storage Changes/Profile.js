import React, {Component} from 'react'
import mockDatabase from './mockDatabase.json'

class Profile extends Component {

  render() {
    const {userEmail} = this.props;
    const fromDB = mockDatabase;
    //console.warn(typeof(userEmail), userEmail);
    const userProfile = mockDatabase.users.filter(user => user.emailAddress === userEmail)
    return (
      <div className='profile'>
        <h1>Your Profile</h1>
        <div>
          {userProfile.map(data =>{
            return (
              <div className="profile-container">
                {data.firstName} {data.lastName}
                <br/>
                {data.headline}
                  <h4>Interests:</h4>
                      {data.interests.map(interest => {
                      return (
                        <li>{interest}</li>
                      ) ;
                      })}   
                  <h4>Skills:</h4>
                      {data.skills.map(skill => {
                      return (
                        <li>{skill}</li>
                      ) ;
                      })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Profile