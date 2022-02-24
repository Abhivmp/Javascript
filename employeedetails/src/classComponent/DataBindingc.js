import React, { Component } from "react";

export default class DataBinding extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    nameChange(event){
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <label>Enter name</label>
                <input onChange={(event) => this.nameChange(event)} /><br />
                <p>The name entered is {this.state.name}</p>
                <ChildComponent userName={this.state.name}></ChildComponent>
            </>
        )
    }
}

class ChildComponent extends React.Component {
    render() {
        return <h3>Value in Child Component is {this.props.userName}</h3>
    }
}

// function ChildComponent(props) {
//     return <h3>Value in Child Component is {props.userName}</h3>
// }