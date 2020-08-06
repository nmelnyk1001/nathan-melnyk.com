import React from 'react'
import {Link} from "react-router-dom"

function Navbar(props){
    return(
        <div>
            <Link to="/" class="waves-effect btn-flat">Home</Link>
            <Link to="/projects" class="waves-effect btn-flat">Projects</Link>
            <Link to="/contact_me" class="waves-effect btn-flat">Contact Me</Link>
            <hr></hr>
        </div>
    )
}

export default Navbar