import React from 'react'

function Home(props){
    return(
        <div>
            <div className="card">
                <h1>Nathan Melnyk</h1>
                <p>About Me</p>
            </div>

            <div className="card">
                <div className="card-content">
                    My Skills
                </div>

                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#skill one">Skill One</a></li>
                        <li className="tab"><a href="#skill two">Skill Two</a></li>
                        <li className="tab"><a href="#skill three">Skill Three</a></li>
                        <li className="tab"><a href="#...">...</a></li>
                    </ul>
                </div>

                <div class="card-content">
                    <div id="skill one">Skill One</div>
                    <div id="skill two">Skill Two</div>
                    <div id="skill three">Skill Three</div>
                    <div id="...">...</div>
                </div>
            </div>
            
        </div>
    )
}

export default Home