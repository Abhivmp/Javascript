import React, { Component } from "react";
import axios from "axios";


export default class FormComponent extends Component {
    state = {
        id: "",
        name: "",
        percentage: ""
    }

    onIDChange = (event) => {
        this.setState({ id: event.target.value })
    };

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    };

    onPercentageChange = (event) => {
        this.setState({ percentage: event.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const Studentdata = {
            id: this.state.id,
            name: this.state.name,
            percentage: this.state.percentage,
        };
        axios
            .post("https://localhost:5001/api/Student/AddData", Studentdata)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    
        alert(' Student Registered Successfully !!');
        this.setState({
            id: "",
            name: "",
            percentage: ""
        })

    };

    render() {
        return (
            <>
                <h4>Student Registeration Form</h4>
                <br />
                <div class="container">
                    <form class="form-horizontal" onSubmit={this.handleSubmit} >
                        <center>
                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="number" class="form-control" placeholder="Enter ID" value={this.state.id} onChange={this.onIDChange} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder="Enter Name" value={this.state.name} onChange={this.onNameChange} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="number" class="form-control" placeholder="Enter Percentage" value={this.state.percentage} onChange={this.onPercentageChange} required />
                                </div>
                            </div>

                            <button class="btn btn-info" type="submit">Save</button>
                        </center>
                    </form>
                </div>
            </>
        );
    }
}
