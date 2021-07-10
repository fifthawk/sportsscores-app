import React from 'react';
import './Soccer.css'





const Soccer = ({ homeTeam, awayTeam, image}) =>  {
    return (
        <div className ='soccer'>
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

    

export default Soccer

