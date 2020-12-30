import React from "react";
import {Link} from "react-router-dom";


const Nav = () =>{
    return(
        <>
        <div>
            <div>
                <div>
                    <Link to="/" >Home</Link>
                </div>
                <div>
                    <Link to="/about" >About</Link>
                </div>
                <div>
                    <Link to="/about" >Login</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav