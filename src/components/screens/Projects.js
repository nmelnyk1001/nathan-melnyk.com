import React from 'react'

function Projects(props){
    return(
        <div style={{padding:20}}>
            <div className="card" style={{padding:10}}>
                <span className="card-title">Personal Website</span>
                <p>Some text here</p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">College 4 Me</span>
                <p>Some text here</p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Discord Birthday Bot</span>
                <p>Some text here</p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Financial Model Text Converter</span>
                <p>Some text here</p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Twitter Clone</span>
                <p>Some text here</p>
            </div>
        </div>
    )
}

export default Projects