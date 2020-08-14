import React from 'react'

import useSkill from "../hooks/useSkill"
function Home(props){
    const {skill, setSkill, increaseSkill, decreaseSkill, displaySkill, getPageStyle} = useSkill()

    const disabled_skill_change_style="disabled col s1"
    const active_skill_change_style="active col s1"

    return(
        <div>
            <div className="card">
                <h1 style={{padding:10, textAlign:"center"}}>Nathan Melnyk</h1>
            </div>

        <div className="card" style={{padding:10}}>
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
            <div className="card ">
                {displaySkill(skill)}
            </div>

            <ul className="pagination card row">
                <li 
                    className={skill !==1 ? active_skill_change_style : disabled_skill_change_style} 
                    onClick={()=>decreaseSkill()}>            
                        <a href="#!">           
                            <i className="material-icons">chevron_left</i>      
                        </a>       
                </li>

                <li className={getPageStyle(1)} onClick={()=>setSkill(1)}>        <a href="#!">1</a>      </li>
                <li className={getPageStyle(2)} onClick={()=>setSkill(2)}>        <a href="#!">2</a>      </li>
                <li className={getPageStyle(3)} onClick={()=>setSkill(3)}>        <a href="#!">3</a>      </li>
                <li className={getPageStyle(4)} onClick={()=>setSkill(4)}>        <a href="#!">4</a>      </li>
                <li className={getPageStyle(5)} onClick={()=>setSkill(5)}>        <a href="#!">5</a>      </li>
                <li className={getPageStyle(6)} onClick={()=>setSkill(6)}>        <a href="#!">6</a>      </li>
                <li className={getPageStyle(7)} onClick={()=>setSkill(7)}>        <a href="#!">7</a>      </li>
                <li className={getPageStyle(8)} onClick={()=>setSkill(8)}>        <a href="#!">8</a>      </li>
                <li className={getPageStyle(9)} onClick={()=>setSkill(9)}>        <a href="#!">9</a>      </li>
                <li className={getPageStyle(10)} onClick={()=>setSkill(10)}>      <a href="#1">10</a>     </li>

                <li 
                    className={skill !== 10 ? active_skill_change_style : disabled_skill_change_style} 
                    onClick={()=>increaseSkill()}>              
                        <a href="#!">           
                            <i className="material-icons">chevron_right</i>     
                        </a>        
                </li>
            </ul>
        </div>
    )
}

export default Home