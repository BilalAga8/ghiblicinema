import React from "react";
import Grid from '@mui/material/Grid';



export default function HeroSection() {
    return(
        <div className="hero-container">
            
            <div className="left-hero">
                <h1>title</h1>
                <p>Two sisters move to the country with their father in order to be closer to their hospitalized mother,<br/>
                 and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest.<br/>
                 When the youngest runs away from home, the older sister seeks help from the spirits to find her.</p>
                <p> Author:Hayao Miyazaki</p>
                </div>
            
            <div className="right-hero">
                <div className="hero-banner">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"></img>
                </div>
            </div>
            
        </div>
    )
}