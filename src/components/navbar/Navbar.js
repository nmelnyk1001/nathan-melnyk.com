import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {goHome, goProjects, goContactMe} from "../redux/currentScreen"

function Navbar(props){
    const buttonClass="waves-effect btn-flat col s4"
    const currentClass="waves-effect btn-flat col s4 grey"

    console.log(props.screen)

    return(
        <div className="card">
            <div className="container row">
                <Link to="/"            className={props.screen === "HOME" ? currentClass : buttonClass}        onClick={props.goHome}>Home</Link>
                <Link to="/projects"    className={props.screen === "PROJECTS" ? currentClass : buttonClass}    onClick={props.goProjects}>Projects</Link>
                <Link to="/contact_me"  className={props.screen === "CONTACT_ME" ? currentClass : buttonClass}  onClick={props.goContactMe}>Contact Me</Link>
            </div>
        </div>
    )
}

function mapStateToProps(globalState){
    return {
        screen:globalState
    }
}

const mapDispatchToProps ={
    goHome, goProjects, goContactMe
}
export default connect(mapStateToProps,mapDispatchToProps) (Navbar)