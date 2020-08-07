import React from 'react'

function Home(props){
    const disabled_skill_style="wave-effect col s1"
    const active_skill_style="active col s1"

    return(
        <div>
            <div className="card">
                <h1 style={{padding:10}}>Nathan Melnyk</h1>
            </div>

            <div className="card ">
                <div className="card-content">
                    <span className="card-title">Skills</span>
                </div>
            </div>

            <ul className="pagination row">
                <li className="disabled col s1">            <a href="#!">           <i class="material-icons">chevron_left</i>      </a>        </li>

                <li className={active_skill_style}>         <a href="#!">1</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">2</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">3</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">4</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">5</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">6</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">7</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">8</a>      </li>
                <li className={disabled_skill_style}>       <a href="#!">9</a>      </li>
                <li className={disabled_skill_style}>       <a href="#1">10</a>     </li>

                <li className="active col s1">              <a href="#!">           <i class="material-icons">chevron_right</i>     </a>        </li>
            </ul>
        </div>
    )
}

export default Home