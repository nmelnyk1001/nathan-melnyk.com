import React from 'react'

function Home(props){
    const [skill, setSkill] = React.useState(1)

    const disabled_skill_change_style="disabled col s1"
    const active_skill_change_style="active col s1"
    const disabled_skill_style="wave-effect col s1"
    const active_skill_style="active col s1"

    function increaseSkill(){
        if (skill !== 10){
            setSkill(skill+1)
        }
    }
    function decreaseSkill(){
        if (skill !== 1){
            setSkill(skill-1)
        }
    }

    function displaySkill(skill){
        switch(skill){
            case 1:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Skills</span>
                        <p>These are the various skills I've picked up throughout college and independent studies!</p>
                    </div>
                )
            case 2:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Materialize</span>
                        <p>If it weren't obvious from the layout of this website, I've taught myself how to
                            use the Materialize CSS library! It's sleek design and ease of use makes it one
                            of my favorite CSS libraries to use!
                        </p>
                    </div>
                )
            case 3:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">React</span>
                        <p>The other main library this website is built with! I learned React programming in 
                            my CSE 316 class, as well as two courses on Scrimba. I fell in love with the idea of
                            components and state, as it makes organizing and designing websites so much easier.
                        </p>
                    </div>
                )
            case 4:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Redux</span>
                        <p>Some text here</p>
                    </div>
                )
            case 5:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">MySQL/SQLite</span>
                        <p>Some text here</p>
                    </div>
                )
            case 6:
                return(
                    <div style={{padding:10}}>
                        <span classname="card-title">MongoDB</span>
                        <p>Some text here</p>
                    </div>
                )
            case 7:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Github</span>
                        <p>Some text here</p>
                    </div>
                )
            case 8:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Node.JS</span>
                        <p>Some text here</p>
                    </div>
                )
            case 9: 
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Cron</span>
                        <p>Some text here</p>
                    </div>
                )
            case 10:
                return(
                    <div style={{padding:10}}>
                        <span className="card-title">Programming Languages</span>
                        <p>Java, Python, JS, Perl, HTML/CSS, VB</p>
                    </div>
                )
            default:
                return(
                    <div>
                        <span className="card-title">Skills</span>
                        <p>These are the various skills I've picked up throughout college and independent studies!</p>
                    </div>
                )
        }
    }

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