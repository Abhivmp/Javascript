import React, { Component } from 'react';
  
class Databinding extends Component {
  
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  
  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h4 style={{ color: "#68cf48" }}>Data Binding Concept</h4>
        <input placeholder="Enter Name" 
        onChange={this.handleChange}></input>
        <p>Enter Name is:<b>{this.state.name}</b></p>
  
      </div>
    )
  }
}
  
export default Databinding;