import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {goHome, goProjects, goContactMe} from "../redux/currentScreen"

function Navbar(props){
    const buttonClass="waves-effect btn-flat col s4"
    const currentStyle = { fontWeight: "bold", textDecoration: "underline", color: "#E1CA96"}
    const normalStyle = { color: "#E1CA96"}

    return(
        <div style={{ background:"#0D1321", boxShadow:"0px 2px 5px"}}>
            <div className="container row" style={{ maxWidth: "100%", width: "100%", textAlign: "center"}}>
                <Link to="/"            className={buttonClass} style={props.state.screen === "HOME" ? currentStyle : normalStyle}        onClick={props.goHome}>Home</Link>
                <Link to="/projects"    className={buttonClass} style={props.state.screen === "PROJECTS" ? currentStyle : normalStyle}    onClick={props.goProjects}>Projects</Link>
                <Link to="/contact_me"  className={buttonClass} style={props.state.screen === "CONTACT_ME" ? currentStyle : normalStyle}  onClick={props.goContactMe}>Contact Me</Link>
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