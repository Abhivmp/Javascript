import React from 'react';

export default class LifeCycleEvents extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            name: "Mayank",
            counter: 1
        }
    }

    render() {
        debugger;
        return <h1>This is Mayank Gupta with Counter: {this.state.counter}</h1>
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        if(nextState.counter % 3 === 0) {
            var result  = window.confirm("Do you want to continue! " + nextState.counter) 
            return result
        } else {
            return true;
        }
    }

    componentDidUpdate() {
        debugger;
    }

    componentDidMount() {
        debugger;
        console.log("Component Mounted...")
        setInterval(() => {
            this.setState({
                name: "Mayank",
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        // component is destroyed....
    }
}