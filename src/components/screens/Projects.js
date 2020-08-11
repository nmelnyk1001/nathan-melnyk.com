import React from 'react'

function Projects(props){
    return(
        <div style={{padding:20}}>
            <div className="card" style={{padding:10}}>
                <span className="card-title">Personal Website</span>
                <p>
                    Website designed and programmed by myself. Designed using Materialize CSS library and written in React.
                    Hosted on Google Cloud Services, with an SSL certificate.
                </p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">College 4 Me</span>
                <p>
                    A four person group project.
                    College 4 Me is a web based app that generates college recommendations for student users. 
                    Written on a Node.JS server, MongoDB database, React frontend, and designed based on team created UML diagrams. 
                </p>
            </div>
            <div className="card" style={{ padding: 10 }}>
                <span className="card-title">Discord Birthday Bot</span>
                <p>
                    Discord bot built on top of a Node.JS server, hosted on Google Cloud Services.
                    Allows users to input birthdays, which are stored on a SQLite database.
                    Cron runs scheduled tasks at the end of each day to congratulate users on their birthday.
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
                    Created by a two person group. TwitterClone is a flask server made to resemble Twitter.
                    It's hosted on Google Cloud Services across multiple instances to accommodate large amounts of traffic.
                    I wrote the frontend in pure Javascript based on a MCV model. 
                    Backend was programmed by partner using a MySQL and MongoDB database.
                </p>
            </div>
        </div>
    )
}

export default Projects