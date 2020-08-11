import React from 'react'

import useSkill from "../hooks/useSkill"
function Home(props){
    const {skill, setSkill, increaseSkill, decreaseSkill, displaySkill, getPageStyle} = useSkill()

    const disabled_skill_change_style="disabled col s1"
    const active_skill_change_style="active col s1"

    return(
        <div style={{padding:20}}>
            <div className="card">
                <h1 style={{padding:10, textAlign:"center"}}>Nathan Melnyk</h1>
            </div>

            {

            }
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