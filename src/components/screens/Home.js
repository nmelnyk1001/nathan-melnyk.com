import React from 'react'
import useSkill from "../hooks/useSkill"
import headshot from "../images/headshot.jpg"
function Home(props){
    const {skill, setSkill, displaySkill, getPageStyle} = useSkill()

    const textStyle={
        width:"100%",
        textAlign:"left",
        textSize:"0.5"
    }

    return(
        <div>
            <div className="card" style={{background: "#C2E1C2"}}>
                <div className="card-content black-text" style={{ background:"#D7B870", padding:"5px"}}>
                    <div className="row" style={{marginBottom:"0px"}}>
                        <img className="col s4" style={{borderRadius:"50%", margin:"auto", maxHeight:"300px", maxWidth:"300px"}} src={headshot} alt="headshot" height="100%" width="100%"/>
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
            {/*
            <div className="card" style={{ background: "#C2E1C2"}}>
                {displaySkill(skill)}
            </div>
            
            <ul className="pagination card row" style={{ background: "#C2E1C2"}}>
                <li className={getPageStyle(1)} onClick={()=>setSkill(1)}>        <a href="#!" style={textStyle}>Materialize</a>      </li>
                <li className={getPageStyle(2)} onClick={()=>setSkill(2)}>        <a href="#!">React</a>      </li>
                <li className={getPageStyle(3)} onClick={()=>setSkill(3)}>        <a href="#!">MySQL</a>      </li>
                <li className={getPageStyle(4)} onClick={()=>setSkill(4)}>        <a href="#!">MongoDB</a>      </li>
                <li className={getPageStyle(5)} onClick={()=>setSkill(5)}>        <a href="#!">Git</a>      </li>
                <li className={getPageStyle(6)} onClick={()=>setSkill(6)}>        <a href="#!">Node.JS</a>      </li>
            </ul>*/}
        </div>
    )
}

export default Home