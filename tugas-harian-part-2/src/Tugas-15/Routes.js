import Data from '../tugas-10/tugas10';
import Tugas9 from '../tugas-9/tugas9';
import Timer from '../tugas-11/tugas11';
import Lists from '../tugas-12/tugas12';
import DaftarBuah1 from '../tugas-13/tugas13';
import DaftarBuah from '../tugas-14/DaftarBuah';
import React from "react";
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Navbar from "./Navbar";

const Routes = () => {
    return (
      <div className="body">
        <Router>
          <div>
            <Navbar/>
          </div>
          <div className="post">
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Tugas9 />
              </Route>
              <Route exact path="/tugas10">
                <Data />
              </Route>
              <Route exact path="/tugas11">
                <Timer />
              </Route>
              <Route exact path="/tugas12">
                <Lists />
              </Route>
              <Route exact path="/tugas13">
                <DaftarBuah1 />
              </Route>
              <Route exact path="/tugas14">
                <DaftarBuah />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default Routes