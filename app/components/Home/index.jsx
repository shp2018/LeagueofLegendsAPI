import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { userInfo } from "os";
import leagueFunctions from "../../../helpers/league.js";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
//import createDataForChart from "../../../helpers/league.js";


export default class Home extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      summonerName: '',
      summonerId:"",
      userInfo: {},
      mastery: [],
      
    
    };
  }

  componentDidMount() {
   
  }

  handleSummoner(e) {
    
    this.setState({
      summonerName: e.target.value
    
    })
    ;
  }
  handleSummonerSubmit(e) {
    console.log(this.state.summonerName)
    
    axios
      .get("/league/getUserInfo", {
        params: {
          summonerName: this.state.summonerName
        }
      })
      .then(result => {
        console.log(result)
        this.setState({
          userInfo: result.data,
          summonerId : result.data.id
        
        });
        this.handleMastery();
      });
  }

  handleMastery(){
    axios
    .get("/league/getMastery", {
      params: {
        summonerId: this.state.summonerId
      }
    })
    .then(res=>{
      console.log(res)

      res.data.map(x =>{
        x.championName = leagueFunctions.getIdFromName(x.championId)
        return(x)
      })
      this.setState({
        mastery: res.data,
       
      })
    })


  }

  render() {
    
    return (
      <div className="container">
        <div>
        <div className="row">
          <div className="col-md-12">
            <input
              
              onChange={this.handleSummoner.bind(this)}
            ></input>
            <button onClick={this.handleSummonerSubmit.bind(this)}>
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">Name: {this.state.userInfo.name}</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            Summoner Level: {this.state.userInfo.summonerLevel}
          </div>
          <div className="row">
          <div className="col-md-12">
            Masteries: {this.state.mastery.slice(0,3).map(x=>{
              return(
                <div>
                <div>{x.championName} {x.championLevel} {x.championPoints}</div>
                <div>
                  <img className = 'champimg' src = {'/champions/' + x.championName + '.png'}></img>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      


        <Doughnut id = 'graph'
          data={leagueFunctions.createDataForChart(this.state.mastery.slice(0,3))}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
          </div>

       
     
      </div>
      </div>
    );
  }
}

module.exports = Home;
