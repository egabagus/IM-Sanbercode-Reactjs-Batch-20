import About from './About/about';
import Home from './Home/home';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Nav from "./Nav";


const Routes = () => {
    return(
        <>
        <div>
            <Router>
                <div>
                    <Nav/>
                </div>
                <div>
                    <Route exact path ="/">
                        <Home/>
                    </Route>
                    <Route exact path ="/about">
                        <About/>
                    </Route>
                </div>
            </Router>
        </div>
        </>
    )
}

export default Routes