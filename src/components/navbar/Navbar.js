import React from 'react'
import {Link} from "react-router-dom"

function Navbar(props){
    return(
        <div className="card">
            <div className="container row">
                <Link to="/" className="waves-effect btn-flat col s4">Home</Link>
                <Link to="/projects" className="waves-effect btn-flat col s4">Projects</Link>
                <Link to="/contact_me" classname="waves-effect btn-flat col s4">Contact Me</Link>
            </div>
        </div>
    )
}

export default Navbar