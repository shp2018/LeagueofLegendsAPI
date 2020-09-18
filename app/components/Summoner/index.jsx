import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { userInfo } from "os";
import leagueFunctions from "../../../helpers/league.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { withRouter } from 'react-router';
//import createDataForChart from "../../../helpers/league.js";

export default class Summoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: this.props.params.summonerName || "",
      summonerId: "",
      accountId: "",
      userInfo: {},
      mastery: [],
      error: "",
      rank: [],
      rankerr: "",
      matchHistory: [],
      gameId: [],
      icon: "",
      region: this.props.params.region || "NA1",
      background:"https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-league-display-2017/en_US/cb24025fade09e3f965776440dffcc65024d3266/assets/img/content/splash/content-original-championillustrations-group-slashes.jpg"
    };
  }

  componentDidMount() {
     this.handleSummonerSubmit();
    

  }

  handleSummoner(e) {
    this.setState({
      summonerName: e.target.value
    });
  }

  handleSummonerSubmit(e) {
    console.log(this.state.summonerName);
    console.log(this.state.region, "region");

    axios
      .get("/league/getUserInfo", {
        params: {
          summonerName: this.state.summonerName,
          region: this.state.region
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
        this.setState({
          background: "https://i.ytimg.com/vi/yHt38mT2mwo/maxresdefault.jpg"
        });
  
      })

      .catch(err => {
        if (e) {
          this.setState({
            error: "User not Found"
          });
        }

      });
  }

  handleMastery() {
    axios
      .get("/league/getMastery", {
        params: {
          summonerId: this.state.summonerId,
          region: this.state.region
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
          summonerId: this.state.summonerId,
          region: this.state.region
        }
      })
      .then(res => {
        console.log(res, "line 95");

        if (res.data.length == 0)
          this.setState({
            rankerr: "RANKED_SOLO_5x5",
            rank: [{ tier: "UNRANKED" }]
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
          accountId: this.state.accountId,
          region: this.state.region
        }
      })
      .then(res => {
        console.log(res, "line 109");
        this.setState({
          matchHistory: res.data.matches
        });
         this.props.history.push(`/summoner/${this.state.region}/${this.state.summonerName}`)
      });
  }
  handleRegion(e) {
    this.setState({
      region: e.target.value
    });
  }
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.handleSummonerSubmit();
      this.setState({
        background: "https://i.ytimg.com/vi/yHt38mT2mwo/maxresdefault.jpg"
      });

    }
    
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
        <div className="container">
          <div>
            <div className="row">
              <div className="col-md-12">
                <input
                 autoFocus
                  className="seach-bar"
                  onKeyDown={this.handleKeyDown.bind(this)}
                  onChange={this.handleSummoner.bind(this)}
                  placeholder="search up a summoner name"
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
            <div>
              <select id="region" onChange={this.handleRegion.bind(this)}>
                <option value="NA1">NA1</option>
                <option value="	KR">KR</option>
                <option value="	EUN1">EUN1</option>
                <option value="	EUW1">EUW1</option>
                <option value="BR1">BR1</option>
                <option value="JP1">JP1</option>
                <option value="LA1">LA1</option>
                <option value="LA2">LA2</option>
                <option value="	OC1">OC1</option>
                <option value="	TR1">TR1</option>
                <option value="RU">RU</option>
                <option value="PBE1">PBE1</option>
              </select>
            </div>

            <div className="row">
              <div className="row">
                <div className="col-md-12 rank">
                  {this.state.rank.map(x => {
                    return (
                      <div>
                        <div>
                          <img
                            className="rankimg"
                            src={"/rank/" + x.tier + ".png"}
                          ></img>
                          <div className="row">
                            <div className="col-md-12">
                              <img
                                className="iconImg"
                                src={"/icon/" + this.state.icon + ".png"}
                              ></img>

                              <div className="lvimg">
                                {this.state.userInfo.summonerLevel}
                              </div>
                            </div>
                            <span id="Name">{this.state.userInfo.name}</span>
                          </div>
                        </div>
                        <div>
                        <div className="rankinfo">
                            {this.state.rankerr} {x.queueType} {x.tier} {x.rank}
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {this.state.mastery.slice(0, 3).map(x => {
                    return (
                      <div>
                        <div className="champname">{x.championName}</div>

                        <div id="wrapper">
                          <img
                            className="champimg"
                            src={"/champions/" + x.championName + ".png"}
                          ></img>
                          <img
                            className="masteryImg"
                            src={"/rank/" + x.championLevel + ".png"}
                          ></img>
                          <p className="text">{x.championPoints}</p>
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
                width={800}
                height={800}
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
        <div>
        <div>
                <input
                 autoFocus
                  className="seachbarMain"
                  onKeyDown={this.handleKeyDown.bind(this)}
                  onChange={this.handleSummoner.bind(this)}
                  placeholder="search up a summoner name"
                ></input>
                <button
                  className="seachbuttonMain"
                  onClick={this.handleSummonerSubmit.bind(this)}
                >
                  Search
                </button>
                {this.state.error}
              </div>
              <div>
              <select id="regionMain" onChange={this.handleRegion.bind(this)}>
                <option value="NA1">NA1</option>
                <option value="	KR">KR</option>
                <option value="	EUN1">EUN1</option>
                <option value="	EUW1">EUW1</option>
                <option value="BR1">BR1</option>
                <option value="JP1">JP1</option>
                <option value="LA1">LA1</option>
                <option value="LA2">LA2</option>
                <option value="	OC1">OC1</option>
                <option value="	TR1">TR1</option>
                <option value="RU">RU</option>
                <option value="PBE1">PBE1</option>
              </select>
            </div>

        </div>
        <img className="SummonerBG" src={this.state.background} alt="Background"></img>
      </div>
    );
  }
}
Summoner.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};

module.exports = Summoner;
