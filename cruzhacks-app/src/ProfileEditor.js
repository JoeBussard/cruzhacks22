import React, {Component} from 'react'
import mockDatabase from './mockDatabase.json'

class ProfileEditor extends Component {

  render() {
    const {userProfile} = this.props;
    let data = userProfile;
    return (
      <div className='profileEditor' style={{maxWidth:"800px"}}>
        <h1>Edit Profile:</h1>
        <button>Save Changes</button>
        <div>
          {userProfile.map(data =>{
            return (
              <div>
                First Name:<textarea required>{data.firstName}</textarea>
                Last Name:<textarea>{data.lastName}</textarea>
                Headline:<textarea>{data.headline}</textarea>
                Interests:{data.interests.map(interest => {
                  return (
                    <textarea>{interest}</textarea>
                  );
                })}
                Skills:{data.skills.map(skill => {
                  return (
                    <textarea>{skill}</textarea>
                  );
                })}

              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default ProfileEditor
