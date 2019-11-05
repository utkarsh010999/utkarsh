import React, { Component } from 'react'
import Header from "../layout/Header";
import Firstpage from "../cards/Firstpage";
import "../CSS/landing.css";

export default class Landing extends Component {
    render() {
        return (
            <div>

                <Header/>
                {/* <Dashboard/>
                <Agentlist/> */}
                <div className="land">
                <Firstpage></Firstpage>
                </div>
            </div>
        );
    }
}
