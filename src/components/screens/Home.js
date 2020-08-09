import React from 'react'

import useSkill from "../hooks/useSkill"
function Home(props){
     const {skill, setSkill, increaseSkill, decreaseSkill, displaySkill} = useSkill()

    const disabled_skill_change_style="disabled col s1"
    const active_skill_change_style="active col s1"
    const disabled_skill_style="wave-effect col s1"
    const active_skill_style="active col s1"



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
                            <i class="material-icons">chevron_left</i>      
                        </a>       
                </li>

                <li className={skill === 1 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(1)}>        <a href="#!">1</a>      </li>
                <li className={skill === 2 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(2)}>        <a href="#!">2</a>      </li>
                <li className={skill === 3 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(3)}>        <a href="#!">3</a>      </li>
                <li className={skill === 4 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(4)}>        <a href="#!">4</a>      </li>
                <li className={skill === 5 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(5)}>        <a href="#!">5</a>      </li>
                <li className={skill === 6 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(6)}>        <a href="#!">6</a>      </li>
                <li className={skill === 7 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(7)}>        <a href="#!">7</a>      </li>
                <li className={skill === 8 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(8)}>        <a href="#!">8</a>      </li>
                <li className={skill === 9 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(9)}>        <a href="#!">9</a>      </li>
                <li className={skill === 10 ? active_skill_style : disabled_skill_style} onClick={()=>setSkill(10)}>       <a href="#1">10</a>     </li>

                <li 
                    className={skill !== 10 ? active_skill_change_style : disabled_skill_change_style} 
                    onClick={()=>increaseSkill()}>              
                        <a href="#!">           
                            <i class="material-icons">chevron_right</i>     
                        </a>        
                </li>
            </ul>
        </div>
    )
}

export default Home