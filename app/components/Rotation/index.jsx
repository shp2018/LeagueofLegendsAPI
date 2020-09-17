import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { userInfo } from "os";
import leagueFunctions from "../../../helpers/league.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
//import createDataForChart from "../../../helpers/league.js";

export default class Rotation extends React.Component {
  constructor(props) {
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    super(props);
    
    this.state = {
        rotation:{},
        freeChampionId: [],
        freeChampionIdsForNewPlayer: [],
        champId: [],
        newChampId: [],
        currentDate: date
        
        
        
    };
    
  }

  componentDidMount() {

    axios.get("/league/freeRotation")
   
        .then(res => {
            console.log(res);
    
            
            this.setState({
              rotation: res.data,
              freeChampionId: res.data.freeChampionIds,
              freeChampionIdsForNewPlayer: res.data.freeChampionIdsForNewPlayers
            });
            this.handleChampId();
            this.handletime();
            
          });

  }


  





  render() {
    return (
      
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                League Stat Check
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/summoner">Summoner Search</a>
              </li>
              <li>
                <a href="/match">Match History</a>
              </li>
              <li>
                <a href="/rotation">Free Champion Rotation</a>
              </li>
            </ul>
          </div>
        </nav>
     
     
        <div>
          
        </div>
        <nav className="navbarRotation">
          <div className="container-fluid">
            <div className="navbar-header">
              
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/rotation/classic">Classic</a>
              </li>
              <li>
                <a href="/rotation/newaccounts">New Accounts</a>
              </li>
              
            </ul>
          </div>
        </nav>
        <div>
        <img className="RotationBG" src="https://images4.alphacoders.com/600/thumb-1920-600528.png" alt="Teemo"></img>
        </div>
        <div>
          <p className="rotationTitle" >This Week's Free Rotations</p>
        </div>
        <div className="time">
        <p>{this.state.currentDate}</p>
      </div>
      
  </div>
  
    );
  }
}

module.exports = Rotation;
