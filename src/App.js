import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";

import Signup from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import Firstpage from "./Components/cards/Firstpage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


import Bike from "./Components/cards/Bike";
import Health from "./Components/cards/Health";
import Life from "./Components/cards/Life";
import Commercial from "./Components/cards/Commercial";
import Third from "./Components/cards/Third";

import Manfcard from "./Components/cards/Manfcard";
import Vehicle from "./Components/cards/VehicleDetails";
import Summary from "./Components/cards/PolicySummary";
import Variant from "./Components/cards/Variant";
import Register from "./Components/cards/RegisterYear";

import Quotes from "./Components/cards/quotes";

import Passbook1 from "./Components/cards/Passbook1";
import Poscertificate from "./Components/cards/Poscertificate";
import Raiseselfinspection from "./Components/cards/RaiseselfInspection";
import Renewal from "./Components/cards/Renewal";
import Lead from "./Components/cards/Lead";
import Ncb from "./Components/cards/Ncb";
import Earning from "./Components/cards/Earning";
import Uploaddoc from "./Components/cards/Uploaddoc";
import Landing from './Components/layout/Landing';
import Chat from "./Components/layout/Chat";
import Chatbox from "./Components/layout/Chatbox";
import Agentport from "./Components/cards/agentport";
import Userportal from "./Components/cards/userportal";
import Policies from "./Components/cards/mypolicies";
import Footer from "./Components/layout/Footer";
import Disclaimer from "./Components/layout/discalimer";
import Privacy from "./Components/layout/privacypolicy";
import Terms from "./Components/layout/terms";
import Footnote from "./Components/layout/footnote";


library.add( faPhone);





library.add(faPhone);

function App() {
  return (
    <Router>
      <div>
        {/* <Route exact path="/" component={Landing} />
        {/* <Route exact path="/" component={Firstpage} /> }
        { <Route exact path="/" component={Header2}/> }
        <Route exact path="/agentport" component={Agentport}/>
        <Route exact path="/disclaimer" component={Disclaimer}/>
        <Route exact path="/privacy" component={Privacy}/>
        <Route exact path="/terms" component={Terms}/>
        <Route exact path="/userportal" component={Userportal}/>
        <Route exact path="/policies" component={Policies}/>
        <Route exact path="/chatbox" component={Chatbox}/>
        <Route exact path="/new" component={Firstpage} />
        <Route exact path="/Bike" component={Bike} />
        <Route exact path="/Health" component={Health} />
        <Route exact path="/Life" component={Life} />
        <Route exact path="/Commercial" component={Commercial} />
        <Route exact path="/Third" component={Third} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Quotes" component={Quotes} />
        <Route exact path="/Vehicle" component={Vehicle} />
        <Route exact path="/Summary" component={Summary} />
        <Route exact path="/Manfcard" component={Manfcard}/>
        <Route exact path="/Variant" component={Variant} />
        {/* <Route exact path="/Manfcard" component={Manfcard}/> */}
        <Route exact path="/models/key" component={Variant} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/Renewal" component={Renewal} />
        <Route exact path="/Earning" component={Earning} />
        {/* <Route exact path="/Signup" component={Signup} /> */}
        <Route exact path="/transaction" component={Passbook1} />
        <Route exact path="/Leads" component={Lead} />
        <Route exact path="/Ncb" component={Ncb} />
        <Route exact path="/Poscertificate" component={Poscertificate} />
        <Route exact path="/Passbook1" component={Passbook1} />
        <Route exact path="/RaiseselfInspection" component={Raiseselfinspection} />
        <Route exact path="/Uploaddoc" component={Uploaddoc} /> */}
        <Chat></Chat>
        <Chatbox></Chatbox>
        {/* <Footer/>
        <Footnote/> */}
      </div>
    </Router>
  );
}

export default App;
