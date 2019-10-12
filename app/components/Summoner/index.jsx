import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { userInfo } from "os";
import leagueFunctions from "../../../helpers/league.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
//import createDataForChart from "../../../helpers/league.js";

export default class Summoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: "",
      summonerId: "",
      accountId: "",
      userInfo: {},
      mastery: [],
      error: "",
      rank: [],
      rankerr: "",
      matchHistory: [],
      gameId: [],
      icon: ""
    };
  }

  componentDidMount() {}

  handleSummoner(e) {
    this.setState({
      summonerName: e.target.value
    });
  }
  handleSummonerSubmit(e) {
    console.log(this.state.summonerName);

    axios
      .get("/league/getUserInfo", {
        params: {
          summonerName: this.state.summonerName
        }
      })
      .then(result => {
        console.log(result);
        this.setState({
          userInfo: result.data,
          accountId: result.data.accountId,
          summonerId: result.data.id,
          error: "",
          icon: result.data.profileIconId
        });
        this.handleMastery();
        this.handleRank();
        this.handleMatchHistory();
      })
      .catch(err => {
        this.setState({
          error: "User not Found"
        });
      });
  }

  handleMastery() {
    axios
      .get("/league/getMastery", {
        params: {
          summonerId: this.state.summonerId
        }
      })
      .then(res => {
        console.log(res);

        res.data.map(x => {
          x.championName = leagueFunctions.getIdFromName(x.championId);
          return x;
        });
        this.setState({
          mastery: res.data
        });
      });
  }
  handleRank() {
    axios
      .get("/league/getRank", {
        params: {
          summonerId: this.state.summonerId
        }
      })
      .then(res => {
        console.log(res, "line 95");

        if (res.data.length == 0)
          this.setState({
            rankerr: "UNRANKED",
            rank: res.data
          });
        else {
          this.setState({
            rank: res.data,
            rankerr: ""
          });
        }
      });
  }

  handleMatchHistory() {
    axios
      .get("/league/getMatchHistory", {
        params: {
          accountId: this.state.accountId
        }
      })
      .then(res => {
        console.log(res, "line 109");
        this.setState({
          matchHistory: res.data.matches
        });
      });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                League Stat Check
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Match History</a>
              </li>
              <li>
                <a href="#">Free Champion Rotation</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-md-12">
                <input
                  className="seach-bar"
                  onChange={this.handleSummoner.bind(this)}
                ></input>
                <button
                  className="seach-bar"
                  onClick={this.handleSummonerSubmit.bind(this)}
                >
                  Search
                </button>
                {this.state.error}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div>
                  <img
                    className="iconImg"
                    src={"/icon/" + this.state.icon + ".png"}
                  ></img>
                  
                 <div className = 'lvimg'>
                 {this.state.userInfo.summonerLevel}
                 </div>
                </div>
                <span id="Name">{this.state.userInfo.name}</span>
              </div>
            </div>
            <div className="row">
            
              <div className="row">
                <div className="col-md-12 rank">
                
                  
                  {this.state.rank.map(x => {
                    return (
                      <div>
                      <div className = 'rankinfo'>
                        {x.queueType} {x.tier} {x.rank}
                        </div>
                        <div>
                        <img
                            className="rankimg"
                            src={"/rank/" + x.tier + ".png"}
                          ></img>
                      </div>
                      </div>
                      
                    );
                  })}
                  {this.state.rankerr}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  Masteries:{" "}
                  {this.state.mastery.slice(0, 3).map(x => {
                    return (
                      <div>
                        <div>
                          {x.championName} {x.championLevel} {x.championPoints}
                        </div>
                        <div>
                          <img
                            className="champimg"
                            src={"/champions/" + x.championName + ".png"}
                          ></img>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Doughnut
                id="graph"
                data={leagueFunctions.createDataForChart(
                  this.state.mastery.slice(0, 3)
                )}
                width={400}
                height={400}
                options={{ maintainAspectRatio: false }}
              />
            </div>
            {/* <div>
            Match History: 
           {this.state.matchHistory.map(x=>{
             return(
               <div>{x.gameId}</div>
             )
           })}
              
           
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Summoner;
