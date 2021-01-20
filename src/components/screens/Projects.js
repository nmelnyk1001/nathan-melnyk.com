import React from 'react'

function Projects(props){
    return(
        <div>
            <div style={{paddingBottom:"1%", paddingTop:"0.5%"}}>
                <p style={{fontWeight:"bold", fontSize:"24px", marginLeft:"2%", marginBottom:"0.5%"}}>Personal Website</p>
                <p style={{marginTop:"0%", marginLeft:"5%", fontSize:"18px"}}>
                    React based frontend, styled with Materialize CSS. Hosted on an instance from Google Cloud Platform.
                    SSL certified for HTTPS use.
                </p>
            </div>
            <div style={{ background:"#D7B870", paddingTop:"1%", paddingBottom:"1%"}}>
                <p style={{ fontWeight: "bold", fontSize: "24px", marginLeft: "2%", marginBottom: "0.5%"}}>College 4 Me</p>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "18px" }}>
                    Four person group project.
                    College 4 Me is a web based app that generates college recommendations for student users. 
                    Converted group created wireframes into React based frontend.
                </p>
            </div>
            <div style={{ paddingBottom: "1%", paddingTop: "0.5%" }}>
                <p style={{ fontWeight: "bold", fontSize: "24px", marginLeft: "2%", marginBottom: "0.5%" }}>Discord Birthday Bot</p>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "18px" }}>
                    Discord bot built using Discord.JS, hosted on Google Cloud Platform.
                    Allows users to input birthdays, which are stored in a SQLite database.
                    Cron runs scheduled tasks to congratulate users on their birthdays.
                </p>
            </div>
            <div style={{ background:"#D7B870", paddingBottom: "1%", paddingTop: "0.5%" }}>
                <p style={{ fontWeight: "bold", fontSize: "24px", marginLeft: "2%", marginBottom: "0.5%" }}>Financial Model Text Converter</p>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "18px" }}>
                    Excel macro written in Visual Basic, commissioned by Torreya Partners, a boutique investment bank.
                    It converts background color of an Excel workbook based on the source and value of each cell.
                </p>
            </div>
            <div style={{ paddingBottom: "1%", paddingTop: "0.5%" }}>
                <p style={{ fontWeight: "bold", fontSize: "24px", marginLeft: "2%", marginBottom: "0.5%" }}>Twitter Clone</p>
                <p style={{ marginTop: "0%", marginLeft: "5%", fontSize: "18px" }}>
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