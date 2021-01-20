import React from 'react'
import headshot from "../images/headshot.jpg"

function Home(props){
    return(
        <div>
            <div className="card" style={{boxShadow:"0px 0px 0px"}}>
                <div className="card-content black-text" style={{ background:"#E1CA96", padding:"5px"}}>
                    <div className="row" style={{marginBottom:"0px"}}>
                        <img className="col s4" style={{margin:"auto", maxHeight:"300px", maxWidth:"300px"}} src={headshot} alt="headshot" height="100%" width="100%"/>
                        <div className="col s8">
                            <h1 style={{margin:"2%"}}>Nathan Melnyk</h1>
                            <p>
                                I'm a senior studying computer science at Stony Brook University. Through my studies, I've
                                grown to love web development! Though my preference lies within the front end, I've learned 
                                to handle back end as well as cloud deployment. 

                                In addition, I became the treasurer for the Science Fiction Forum, budgeting for events, library items, and even our 50th anniversary.

                                In 2017, I became a gold medalist in the Junior Division of the World Team Cup, held in Sardinia, Italy playing as part of the High Performance team for the USTA.

                                Outside of school and athletics I knit, crochet, cook, and bake for stress relief! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"#D7B870"}}>
                <div className="container">
                    <h3 style={{textAlign:"center", paddingTop:"3%"}}>Skills</h3>
                    <div className="divider" style={{color:"black",boxShadow:"0px 2px 5px"}}></div>

                    <div className="row" style={{ marginBottom: "0px", paddingTop: "2%"}}>
                        <div className="col s2"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign:"center", padding:"2%", fontSize:"26px"}}>React</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign:"center", padding:"2%", fontSize:"26px"}}>Materialize</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign:"center", padding:"2%", fontSize:"26px"}}>Github</div>
                        <div className="col s2"></div>
                    </div>
                    <div className="row" style={{ marginBottom: "0px", paddingTop: "2%" }}>
                        <div className="col s2"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign: "center", padding: "2%", fontSize: "26px" }}>MySQL</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign: "center", padding: "2%", fontSize: "26px" }}>Nginx</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign: "center", padding: "2%", fontSize: "26px" }}>Node.JS</div>
                        <div className="col s2"></div>
                    </div>
                    <div className="row" style={{ marginBottom: "0px", paddingTop: "2%", paddingBottom:"1.5%"}}>
                        <div className="col s2"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign: "center", padding: "2%", fontSize: "26px" }}>Python</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign: "center", padding: "2%", fontSize: "26px" }}>C</div>
                        <div className="col s1"></div>
                        <div className="col s2" style={{ background: "#D7B870", textAlign: "center", padding: "2%", fontSize: "26px" }}>Javascript</div>
                        <div className="col s2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home