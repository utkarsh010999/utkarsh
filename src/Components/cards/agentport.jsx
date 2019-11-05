import React, { Component } from 'react'
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import Agentlist from "../layout/Agentlist";
import Firstpage from "../cards/Firstpage";


export default class Agentport extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <Dashboard/>
                <Agentlist/>
                <div style={{marginTop:"-25%"}}>
                <Firstpage/>
                </div>
            </div>
        )
    }
}
