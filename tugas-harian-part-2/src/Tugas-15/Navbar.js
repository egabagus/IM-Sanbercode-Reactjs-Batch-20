import React from "react";
import {Link} from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="li">
          <Link to="/">Tugas 9</Link>
        </div>
        <div className="li">
          <Link to="/tugas10">Tugas 10</Link>
        </div>
        <div className="li">
          <Link to="/tugas11">Tugas 11</Link>
        </div>
        <div className="li">
          <Link to="/tugas12">Tugas 12</Link>
        </div>
        <div className="li">
          <Link to="/tugas13">Tugas 13</Link>
        </div>
        <div className="li">
          <Link to="/tugas14">Tugas 14</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar