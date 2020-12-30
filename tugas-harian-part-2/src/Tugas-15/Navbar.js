import React from "react";
import {Link} from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <>
    <div className="nav">
      <div className="nav2">
        <div className="li"></div>
        <div className="li">
          <Link to="/" style={{textDecoration: "none"}}>Tugas 9</Link>
        </div>
        <div className="li">
          <Link to="/tugas10" style={{textDecoration: "none"}}>Tugas 10</Link>
        </div>
        <div className="li">
          <Link to="/tugas11" style={{textDecoration: "none"}}>Tugas 11</Link>
        </div>
        <div className="li">
          <Link to="/tugas12" style={{textDecoration: "none"}}>Tugas 12</Link>
        </div>
        <div className="li">
          <Link to="/tugas13" style={{textDecoration: "none"}}>Tugas 13</Link>
        </div>
        <div className="li">
          <Link to="/tugas14" style={{textDecoration: "none"}}>Tugas 14</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar