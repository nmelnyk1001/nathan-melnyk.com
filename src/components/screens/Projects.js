import React from 'react'

function Projects(props){
    const cardStyle={
        paddingBottom:"1%",
        paddingTop:"1%"
    }
    const darkCardStyle={
        background: "#D7B870", 
        paddingTop: "1%", 
        paddingBottom: "1%"
    }
    const nameStyle={
        fontFamily:"'Merriweather', serif",
        fontWeight:"bold",
        fontSize:"25px",
        paddingLeft:"2%",
        paddingBottom:"0.5%",
        marginTop:"0%", 
        marginBottom:"0%"
    }
    const descStyle={
        fontFamily:"'Raleway', sans-serif;",
        fontSize:"19px",
        marginTop:"0%", 
        paddingLeft:"5%"
    }
    
    return(
        <div>
            <div style={cardStyle}>
                <p style={nameStyle}>Personal Website</p>
                <p style={descStyle}>
                    React based frontend, styled with Materialize CSS. Hosted on an instance from Google Cloud Platform.
                    SSL certified for HTTPS use.
                </p>
            </div>
            <div style={darkCardStyle}>
                <p style={nameStyle}>College 4 Me</p>
                <p style={descStyle}>
                    Four person group project.
                    College 4 Me is a web based app that generates college recommendations for student users. 
                    Converted group created wireframes into React based frontend.
                </p>
            </div>
            <div style={cardStyle}>
                <p style={nameStyle}>Discord Birthday Bot</p>
                <p style={descStyle}>
                    Discord bot built using Discord.JS, hosted on Google Cloud Platform.
                    Allows users to input birthdays, which are stored in a SQLite database.
                    Cron runs scheduled tasks to congratulate users on their birthdays.
                </p>
            </div>
            <div style={darkCardStyle}>
                <p style={nameStyle}>Financial Model Text Converter</p>
                <p style={descStyle}>
                    Excel macro written in Visual Basic, commissioned by Torreya Partners, a boutique investment bank.
                    It converts background color of an Excel workbook based on the source and value of each cell.
                </p>
            </div>
            <div style={cardStyle}>
                <p style={nameStyle}>Twitter Clone</p>
                <p style={descStyle}>
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