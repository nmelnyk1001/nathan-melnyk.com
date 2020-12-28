import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {goHome, goProjects, goContactMe} from "../redux/currentScreen"

function Navbar(props){
    const buttonClass="waves-effect btn-flat col s4"
    const currentStyle={fontWeight: "bold", textDecoration: "underline"}

    return(
        <div style={{ background:"#D7B870"}}>
            <div className="container row" style={{maxWidth: "100%", width: "100%", textAlign:"center"}}>
                <Link to="/"            className={buttonClass} style={props.state.screen === "HOME" ? currentStyle : null}        onClick={props.goHome}>Home</Link>
                <Link to="/projects"    className={buttonClass} style={props.state.screen === "PROJECTS" ? currentStyle : null}    onClick={props.goProjects}>Projects</Link>
                <Link to="/contact_me"  className={buttonClass} style={props.state.screen === "CONTACT_ME" ? currentStyle : null}  onClick={props.goContactMe}>Contact Me</Link>
            </div>
        </div>
    )
}

function mapStateToProps(globalState){
    return {
        state:globalState
    }
}

const mapDispatchToProps ={
    goHome, goProjects, goContactMe
}
export default connect(mapStateToProps,mapDispatchToProps) (Navbar)