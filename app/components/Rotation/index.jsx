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
    super(props);
    this.state = {
        rotation:{},
        playerRotation: [],
        newplayerRotation:[]
        
    };
  }

  componentDidMount() {

    axios.get("/league/freeRotation")
   
        .then(res => {
            console.log(res);
    
    
            this.setState({
              rotation: res.data
            });
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
            Rotation :{JSON.stringify(this.state.rotation)}

           
            
        </div>
       
  </div>
    );
  }
}

module.exports = Rotation;
