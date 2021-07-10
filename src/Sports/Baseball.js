import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './Baseball.css';

const Baseball = () =>  {
    const [scores, setScores] = useState([]);
    const [highlights, setHighlights] = useState([]);

    const url = 'https://www.thesportsdb.com/api/v2/json/40130162/livescore.php?l=4424'

    useEffect(()=> {
        axios.get(url)
        .then(res => {
            setScores(res.data.events)
        }).catch(e => console.log(e))
    }, [])

    return(
    scores.map(scores => {
        return (
            <div className ='baseball'>
            <div className = 'container'>
                <div className = 'teamLogo1'>
                    <img className ='logo' src = {scores.strHomeTeamBadge + '/preview'} alt ={scores.strHomeTeam}></img>
                    </div>

                    <div className = 'teamScore1'>
                    <p>{scores.intHomeScore > 0 ? scores.intHomeScore : 0}</p>
                    
                    </div>
                    <p className = 'versus'>vs</p>
                    <div className = 'teamLogo2'>
                    <img className ='logo' src = {scores.strAwayTeamBadge + '/preview'} alt ={scores.strAwayTeam}></img>
                    </div>

                    <div className = 'teamScore2'>
                    <p>{scores.intAwayScore > 0 ? scores.intAwayScore : 0}</p>
                    
                    </div>
                    
                
                </div>
                </div>
            
        )
    })

    )
}

export default Baseball