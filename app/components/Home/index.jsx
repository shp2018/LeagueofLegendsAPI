import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { userInfo } from "os";
import getIdFromName from "../../../helpers/league.js";

export default class Home extends React.Component {
  constructor(props) {
    console.log(getIdFromName(41))
    super(props);
    this.state = {
      summonerName: 'Kevin2018',
      summonerId:"",
      userInfo: {},
      mastery: []
    };
  }

  componentDidMount() {
    this.handleSummonerSubmit()
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
        x.championName = getIdFromName(x.championId)
        return(x)
      })
      this.setState({
        mastery: res.data
      })
    })


  }

  render() {
    
    return (
      <div className="container">
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
                  <img src = {'/champions/' + x.championName + '.jpg'}></img>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

module.exports = Home;