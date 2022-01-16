import React, {Component} from 'react'

class Profile extends Component {

  render() {
    const {profileData} = this.props;
    const dataArrayForDisplay = profileData;
    var firstName = profileData.firstName;
    
    return (
      <div className='profile'>
        <h1>Your Profile</h1>
        <div>
          <div className='nameContainer'>{this.firstName}</div>
        </div>
        <div>{JSON.stringify(dataArrayForDisplay)}</div>
      </div>
    )
  }
}

export default Profile