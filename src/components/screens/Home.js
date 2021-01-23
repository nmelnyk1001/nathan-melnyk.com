import React from 'react'
import headshot from "../images/headshot.jpg"

function Home(props){
    const skillStyle = { 
        fontFamily:"'Raleway', sans-serif", 
        background: "#D7B870", 
        textAlign: "center", 
        padding: "2%", 
        fontSize: "26px" 
    };
    
    return(
        <div>
            <div style={{ background:"#E1CA96", padding:"5px"}}>
                <div className="row" style={{marginBottom:"0px"}}>
                    <img className="col s4" style={{margin:"auto", maxHeight:"300px", maxWidth:"300px"}} src={headshot} alt="headshot" height="100%" width="100%"/>
                    <div className="col s8">
                        <h1 style={{paddingLeft:"2%", paddingBottom:"0%", marginTop:"1%", fontFamily:"'Merriweather', serif"}}>Nathan Melnyk</h1>
                        <p style={{fontFamily: "'Raleway', sans-serif", fontDecoration:"bold", fontSize:"20px", paddingLeft:"5%"}}>
                            I'm a senior studying computer science at Stony Brook University. Through my studies, I've
                            grown to love web development! Though my preference lies within the front end, I've learned 
                            to handle back end as well as cloud deployment. 

                            In addition, I became the treasurer for the Science Fiction Forum, budgeting for events, library items, and even our 50th anniversary.

                            In 2017, I became a gold medalist in the Junior Division of the World Team Cup, held in Sardinia, Italy playing as part of the High Performance team for the USTA.

                            Outside of school and athletics I knit, crochet, cook, and bake for relaxation! 
                        </p>
                    </div>
                </div>
            </div>
            <div style={{background:"#D7B870"}}>
                <div className="container">
                    <h3 style={{fontFamily:"'Merriweather', serif", textAlign:"center", paddingTop:"3%"}}>Skills</h3>
                    <div className="divider" style={{background:"grey",boxShadow:"0px 2px 5px"}}></div>

                    <div className="row" style={{ marginBottom: "0px", paddingTop: "2%"}}>
                        <div className="col s2"></div>
                        <div className="col s2" style={skillStyle}>React</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={skillStyle}>Git</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={skillStyle}>Materialize</div>
                        <div className="col s2"></div>
                    </div>
                    <div className="row" style={{ marginBottom: "0px", paddingTop: "2%" }}>
                        <div className="col s2"></div>
                        <div className="col s2" style={skillStyle}>MySQL</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={skillStyle}>Nginx</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={skillStyle}>Node.JS</div>
                        <div className="col s2"></div>
                    </div>
                    <div className="row" style={{ marginBottom: "0px", paddingTop: "2%", paddingBottom:"1.5%"}}>
                        <div className="col s2"></div>
                        <div className="col s2" style={skillStyle}>Python</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={skillStyle}>C</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={skillStyle}>Javascript</div>
                        <div className="col s2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home