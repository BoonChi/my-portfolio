import React from 'react';
import './LandingPage.css'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Penguin from '../penguin/Penguin'
// import AboutMe from '../aboutMe/AboutMe';
// import Interest from '../interest/Interest';
// import Contact from '../contact/Contact';
import Description from '../description/Description'
const LandingPage: React.FunctionComponent = () => {
    return (
        // <Router>
            <div>
                <Penguin></Penguin>
                <Description></Description>
                {/* <div className="rows">
                    <div className="row-detail">
                        <Link to="/aboutMe">About Me</Link>
                    </div>
                    <div className="row-detail">
                        <Link to="/interest">My Interest</Link>
                    </div>
                    <div className="row-detail">
                        <Link to="/contact">Contact Me</Link>
                    </div>
                </div> */}
                {/* <Switch>
                    <Route path="/aboutMe"  component={AboutMe} />
                    <Route path="/interest"  component={Interest} />
                    <Route path="/contact"  component={Contact} />
                </Switch> */}
            </div>
        // </Router>
    )
};

export default LandingPage;