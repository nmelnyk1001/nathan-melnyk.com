import React from "react"
import github from "../images/GitHub_Logo.png"

function ContactMe(props){
    return(
        <div>
            <div style={{ padding: 10}}>
                <p style={{ fontWeight: "bold", fontSize: "24px", marginLeft: "2%", marginBottom: "0.5%" }}>Nathan Melnyk</p>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "18px" }}>Phone Number: +1(631)452-4263</p>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "18px" }}>Long Island, New York</p>
            </div>

            <div className="row" style={{ background: "#D7B870", paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                <img className="col s2" src={github} alt="github logo" height="100" width="100" style={{display:"inline"}}/>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "22px", display:"inline", position:"absolute", paddingTop:"2%"}}>https://github.com/nmelnyk1001</p>
            </div>

            <div className="row" style={{paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                <img className="col s2" src="https://image.flaticon.com/icons/svg/281/281769.svg" alt="gmail logo" height="100" width="100" style={{display:"inline"}}/>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "22px", display:"inline", position:"absolute", paddingTop:"2%"}}>nmelnyk1001@gmail.com</p>
                {/*<textarea style={{display:"inline", width:"auto", height:"auto"}}></textarea>*/}
            </div>

            <div className="row" style={{ background: "#D7B870", paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                <img className="col s2" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn Logo" height="100" width="100" style={{display:"inline"}}/>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "22px", display:"inline", position:"absolute", paddingTop:"2%"}}>www.linkedin.com/in/nathan-melnyk</p>
            </div>
        </div>
    )
}

export default ContactMe