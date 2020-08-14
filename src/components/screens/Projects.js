import React from 'react'

function Projects(props){
    return(
        <div>
            <div className="card" style={{padding:10}}>
                <span className="card-title">Personal Website</span>
                <p>
                    React based frontend, styled with Materialize CSS. Hosted on an instance from Google Cloud Platform.
                    SSL certified for HTTPS use.
                </p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">College 4 Me</span>
                <p>
                    Four person group project.
                    College 4 Me is a web based app that generates college recommendations for student users. 
                    Converted group created wireframes into React based frontend.
                </p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Discord Birthday Bot</span>
                <p>
                    Discord bot built using Discord.JS, hosted on Google Cloud Platform.
                    Allows users to input birthdays, which are stored in a SQLite database.
                    Cron runs scheduled tasks to congratulate users on their birthdays.
                </p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Financial Model Text Converter</span>
                <p>
                    Excel macro written in Visual Basic, commissioned by Torreya Partners, a boutique investment bank.
                    It converts background color of an Excel workbook based on the source and value of each cell.
                </p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Twitter Clone</span>
                <p>
                    Worked on as a two person team. TwitterClone is a flask server made to resemble Twitter.
                    Hosted on Google Cloud Platform across multiple instances to accommodate large amounts of traffic.
                    Wrote the frontend using pure Javascript. 
                    Backend written by partner using a MySQL database.
                </p>
            </div>
        </div>
    )
}

export default Projects