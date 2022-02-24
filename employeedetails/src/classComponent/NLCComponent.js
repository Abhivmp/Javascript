   
import { Component } from "react";
import Axios from "axios";

export default class NLCComponent extends Component {
    constructor() {
        super();
        this.state = {
            NLC_Data: {}
        }
    }

    render() {
        return (
            <div id="holow">
                <h3 >NLC India Power Limited</h3>
                <br />
                <div className="center" style={{ width: '450px', margin: '20px', display: 'inline-block' }}>
                    <div className="card-header">
                        {this.state.NLC_Data.DISPID} {this.state.NLC_Data.SC_SUBSEC}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.NLC_Data.company}</h5>
                        <div class="alert alert-primary" role="alert">
                            Before Changed Price : {this.state.NLC_Data.priceprevclose}
                        </div>
                        <div class="alert alert-secondary" role="alert">
                           After Price Change :  {this.state.NLC_Data.pricechange}
                        </div>
                        <div class="alert alert-success" role="alert">
                            % of Price Change : {this.state.NLC_Data.pricepercentchange}
                        </div>
                        <div class="alert alert-danger" role="alert">

                            Current Price : {this.state.NLC_Data.pricecurrent}
                        </div>
                        <div class="alert alert-warning" role="alert">
                            Last Updated  : {this.state.NLC_Data.lastupd}
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        Year Details: {this.state.NLC_Data.YR}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        setInterval(() =>{
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC").then((response) => {

            this.setState({ NLC_Data: response.data.data })
            console.log(this.state.NLC_Data)
        });
    }, 1000);
    }

}
