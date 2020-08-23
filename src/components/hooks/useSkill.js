import React, {useState, useEffect} from "react"

function useSkill(){
    const [skill, setSkill] = useState(1)

    const disabled_skill_style = "wave-effect col s1"
    const disabled_skill_big = "wave-effect col s2"
    const active_skill_style = "active col s1"
    const active_skill_big = "active col s2"

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setSkill((prevSkill)=>{
                return prevSkill === 6 ? 1 : prevSkill + 1
            })
        },3000)

        return () => clearInterval(intervalID)
    },[])

    function increaseSkill() {
        if (skill !== 10) {
            setSkill(skill + 1)
        }
    }
    function decreaseSkill() {
        if (skill !== 1) {
            setSkill(skill - 1)
        }
    }

    function getPageStyle(pageNum){
        return skill === pageNum ? active_skill_big : disabled_skill_big
    }

    function displaySkill(skill) {
        switch (skill) {
            case 1:
                return (
                    <div style={{ padding: 10, height:200, width:750 }}>
                        <span className="card-title">Materialize</span>
                        <p>
                            My CSS Library of choice. 
                            This website, and most other front ends I make, are styled with it. 
                        </p>
                    </div>
                )
            case 2:
                return (
                    <div style={{ padding: 10, height:200, width:750 }}>
                        <span className="card-title">React / Redux</span>
                        <p>
                            Frontend library of choice. 
                            This website alone makes use of components, hooks, router, and state.
                        </p>
                    </div>
                )
            case 3:
                return (
                    <div style={{ padding: 10, height:200, width:750 }}>
                        <span className="card-title">MySQL/SQLite</span>
                        <p>
                            Used in Discord Birthday bot to keep track of users birthdays in a clean and neat fashion. 
                            Makes data lookup easier as well, when compared to a dictionary or NoSQL database.
                        </p>
                    </div>
                )
            case 4:
                return (
                    <div style={{ padding: 10, height: 200, width: 750 }}>
                        <span className="card-title">MongoDB</span>
                        <p>
                            NoSQL library of choice for when MySQL isn't the right database to use for the task. 
                        </p>
                    </div>
                )
            case 5:
                return (
                    <div style={{ padding: 10, height: 200, width: 750 }}>
                        <span className="card-title">Github</span>
                        <p>
                            Used on all personal and class projects for version control. 
                            Allows for easy group collaboration and organization.
                        </p>
                    </div>
                )
            case 6:
                return (
                    <div style={{ padding: 10, height: 200, width: 750 }}>
                        <span className="card-title">Node.JS</span>
                        <p>
                            Used on the Discord Birthday bot to scan messages for commands and execute code based on said commands.
                        </p>
                    </div>
                )
            default:
                return (
                    <div>
                        <span className="card-title">Skills</span>
                        <p>These are the various skills I've picked up throughout college and independent studies!</p>
                    </div>
                )
        }
    }

    return {skill, setSkill, increaseSkill, decreaseSkill, displaySkill, getPageStyle}
}

export default useSkill