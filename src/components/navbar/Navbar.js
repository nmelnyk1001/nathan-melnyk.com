import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {goHome, goProjects, goContactMe} from "../redux/currentScreen"

function Navbar(props){
    const buttonClass="waves-effect btn-flat col s4"
    const currentStyle = { 
        fontFamily:"'Raleway',serif", 
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: "#E1CA96"
    }
    const normalStyle = { 
        fontFamily:"'Raleway', serif", 
        color: "#E1CA96"
    }

    return(
        <div style={{ background:"#0D1321", boxShadow:"0px 2px 5px"}}>
            <div className="container">
                <div className="container row" style={{ maxWidth: "100%", width: "100%", textAlign: "center"}}>
                    <Link to="/"            className={buttonClass} style={props.state.screen === "Home" ? currentStyle : normalStyle}        onClick={props.goHome}>
                        <p style={{margin:"0%", fontSize:"20px", textTransform:"capitalize"}}>Home</p>
                    </Link>
                    <Link to="/projects"    className={buttonClass} style={props.state.screen === "Projects" ? currentStyle : normalStyle}    onClick={props.goProjects}>
                        <p style={{margin:"0%", fontSize:"20px", textTransform:"capitalize"}}>Projects</p>
                    </Link>
                    <Link to="/contact_me"  className={buttonClass} style={props.state.screen === "Contact_me" ? currentStyle : normalStyle}  onClick={props.goContactMe}>
                        <p style={{margin:"0%", fontSize:"20px", textTransform:"capitalize"}}>Contact Me</p>
                    </Link>
                </div>
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