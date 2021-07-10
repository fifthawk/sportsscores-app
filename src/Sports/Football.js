import React from 'react';
import './Football.css'





const Football = ({ homeTeam, awayTeam, image}) =>  {
    return (
        <div className ='football'>
        <div className = 'container'>
            <div className ='homeContainer'>
            <p>
                {homeTeam}
                
            </p>
            </div>


            <div className = 'awayContainer'>
            <p>
                {awayTeam}
            </p>

            </div>
            <div className = 'logoSoccer'>

            <img src = {image + '/preview'} alt ={`${awayTeam} vs ${homeTeam}`} />

            </div>
        </div>
        </div>
    )


}

    

export default Football