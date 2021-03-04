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
            <div>
                <Penguin></Penguin>
                <Description></Description>
            </div>
    )
};

export default LandingPage;