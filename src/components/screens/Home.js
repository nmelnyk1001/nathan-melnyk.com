import React from 'react'

import useSkill from "../hooks/useSkill"
function Home(props){
    const {skill, setSkill, displaySkill, getPageStyle} = useSkill()

    const textStyle={
        width:"100%",
        textAlign:"left",
        textSize:"0.5"
    }

    return(
        <div>
            <div className="card" style={{ background: "#C2E1C2"}}>
                <h1 style={{padding:10, textAlign:"center"}}>Nathan Melnyk</h1>
            </div>

            <div className="card" style={{ padding: 10, background: "#C2E1C2"}}>
            <span className="card-title"></span>
            <p>
                Good day! I'm a college student attending Stonybrook University, set to graduate December 2020. 
                During my school career, I became the treasurer for the Science Fiction Forum for two years, budgeting for events, library items, and even our 50th anniversary.
                Outside of school I'm an avid athlete and craftsperson! 
            </p>
            <p>
                In 2017, I became a gold medalist in the Junior Division of the World Team Cup, held in Sardinia, Italy.
                To this day, I'm part of the High Performance team for the USTA.
            </p>
            <p>
                In addition, I crochet and knit for stress relief! Creating beautiful scarves, beanies, and even plushies both from patterns and scratch.
            </p>
            <p>
                Finally, I'm an enthusiastic home cook and baker, trying to further my skills in the free time I have.
            </p>
        </div>
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
            </ul>
        </div>
    )
}

export default Home