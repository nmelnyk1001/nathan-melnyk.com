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

            <div class="card">
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a href="#test4">Test 1</a></li>
                        <li class="tab"><a class="active" href="#test5">Test 2</a></li>
                        <li class="tab"><a href="#test6">Test 3</a></li>
                    </ul>
                </div>
                <div class="card-content grey lighten-4">
                    <div id="test4">Test 1</div>
                    <div id="test5">Test 2</div>
                    <div id="test6">Test 3</div>
                </div>
            </div>
            
        </div>
    )
}

export default Home