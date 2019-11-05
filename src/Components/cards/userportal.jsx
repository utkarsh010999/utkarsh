import React, { Component } from 'react'
import Header3 from "../layout/Header3";
import Firstpage from './Firstpage';
import "../CSS/userportal.css"


export default class Agentport extends Component {
    render() {
        return (
            <div>
                <Header3/>
                <div className="user">
                <Firstpage/>
                </div>
            </div>
        )
    }
}
