import React, { useState, useEffect } from 'react';
import axios from 'axios'


import Baseball from './Sports/Baseball.js'
import Soccer from './Sports/Soccer.js'
import Home from './Home.js'
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  const [soccerScores, setSoccerScores] = useState([]);
  const [footballScores, setFootballScores] = useState([])

  const url = 'https://www.thesportsdb.com/api/v1/json/40130162/eventsnextleague.php?id=4346';
  const url2 = 'https://www.thesportsdb.com/api/v1/json/40130162/eventsnextleague.php?id=4391';

  useEffect(()=> {
    axios.get(url)
    .then(res => {
      setSoccerScores(res.data.events)
    }).catch(e => console.log(e))
    axios.get(url2)
    .then(res => {
      setFootballScores(res.data.events)
    }).catch(e => console.log(e))
  },[] )


  return (
    <Router>
      <div>
        <nav>
          <ul>

          <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/MLB">MLB</Link>
            </li>

            <li>
              <Link to="/MLS">MLS</Link>
            </li>

            <li>
              <Link to="/NFL">NFL</Link>
            </li>
 
          </ul>
        </nav>

        <Switch>
          <Route path="/MLB">
            <Baseball />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/MLS">
            {soccerScores.map(scores => {
              return (
                <Soccer
                key = {scores.idEvent}
                homeTeam = {scores.strHomeTeam}
                awayTeam = {scores.strAwayTeam}
                image = {scores.strSquare}
                />

              )
            })}
          </Route>

          <Route path="/NFL">
            {footballScores.map(scores => {
              return (
                <Soccer
                key = {scores.idEvent}
                homeTeam = {scores.strHomeTeam}
                awayTeam = {scores.strAwayTeam}
                image = {scores.strThumb}
                />

              )
            })}
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


