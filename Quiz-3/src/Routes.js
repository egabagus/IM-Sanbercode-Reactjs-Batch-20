import Index from './Tugas-2/index1';
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
                        <Index/>
                    </Route>
                </div>
            </Router>
        </div>
        </>
    )
}

export default Routes