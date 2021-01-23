import React from "react"
import github from "../images/GitHub_Logo.png"

function ContactMe(props){
    const linkStyle = { 
        marginTop: "0%", 
        paddingLeft: "5%", 
        fontFamily:"'Raleway', sans-serif",
        fontSize: "22px", 
        color:"black", 
        display: "inline", 
        position: "absolute", 
        paddingTop: "2%"
    }
    
    return(
        <div>
            <div style={{ paddingBottom: "1%", paddingTop: "0.5%" }}>
                <p style={{ fontFamily:"'Merriweather', serif", fontWeight: "bold", fontSize: "40px", paddingLeft: "2%", paddingBottom: "0.5%", marginBottom:"0.5%" }}>Nathan Melnyk</p>
                <p style={{ fontFamily:"'Raleway', sans-serif", paddingTop: "0%", paddingLeft: "5%", fontSize: "22px" }}>Phone Number: +1(631)452-4263</p>
                <p style={{ fontFamily:"'Raleway', sans-serif", paddingTop: "0%", paddingLeft: "5%", fontSize: "22px" }}>Long Island, New York</p>
            </div>

            <div className="row" style={{ background: "#D7B870", paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                <img className="col s2" src={github} alt="github logo" height="100" width="100" style={{display:"inline"}}/>
                <a href="https://github.com/nmelnyk1001" style={linkStyle}>https://github.com/nmelnyk1001</a>
            </div>

            <div className="row" style={{paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                <img className="col s2" src="https://image.flaticon.com/icons/svg/281/281769.svg" alt="gmail logo" height="100" width="100" style={{display:"inline"}}/>
                <a href="mailto:nmelnyk1001@gmail.com" style={linkStyle}>nmelnyk1001@gmail.com</a>
            </div>

            <div className="row" style={{ background: "#D7B870", paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                <img className="col s2" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn Logo" height="100" width="100" style={{display:"inline"}}/>
                <a href="www.linkedin.com/in/nathan-melnyk" style={linkStyle}>www.linkedin.com/in/nathan-melnyk</a>
            </div>
        </div>
    )
}

export default ContactMe