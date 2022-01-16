import React, {Component } from 'react'
import useLocalStorage from './useLocalStorage';

class TestButton extends Component {

    userData;

constructor(props){
    super(props)

  this.state = {
    name: '',
    job: '',
  }
}


  state = this.initialState

  componentDidMount(){
    this.userData = JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')){
        this.setState({
            name: this.userData.name,
            job: this.userData.job,
        })
    } else {
        this.setState({
            name: '',
            job: '',
        })
    }
}

  componentWillUpdate(nextProps, nextState){
      localStorage.setItem('user', JSON.stringify(nextState))
  }

  render() {
    const { name, job } = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
          />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
      </form>
    );
  }
  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })

}   
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
}


export default TestButton;