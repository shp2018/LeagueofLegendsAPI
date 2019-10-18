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
      gameIds: [],
      icon: "",
      region: this.props.params.region || "NA1",
      matchinfo: []
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
        
        });
       
        this.handleMatchHistory();
      })
        .catch(err => {
        if (e) {
          this.setState({
            error: "User not Found"
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
        this.setState({
          matchHistory: res.data.matches
        });
        this.handleGameId();

        this.handleMatchInfo();
      });
  }


  handleGameId(){
      
      let gameIds = this.state.matchHistory.map(x => x.gameId);
      this.setState({
          gameIds: gameIds
      })
  }

  handleMatchInfo(){
      axios.post("/league/getMatchInfo",{
            gameIds: this.state.gameIds,
            region: this.state.region
      }).then(res=>{
        this.setState({
            matchinfo: res.data
        })

        console.log(this.props)
        this.props.history.push(`/match/${this.state.region}/${this.state.summonerName}`)
      })
  }

  handleRegion(e){
    this.setState({
      region: e.target.value
    })
  }
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.handleSummonerSubmit();
    }
  }


  render() {
    console.log(this.state)
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
            <select id="region"  onChange={this.handleRegion.bind(this)}>
              <option value="NA1">NA1</option>
              <option value="KR">KR</option>
              <option value="EUN1">EUN1</option>
              <option value="EUW1">EUW1</option>
              <option value="BR1">BR1</option>
              <option value="JP1">JP1</option>
              <option value="LA1">LA1</option>
              <option value="LA2">LA2</option>
              <option value="OC1">OC1</option>
              <option value="TR1">TR1</option>
              <option value="RU">RU</option>
              <option value="PBE1">PBE1</option>

              </select>
              </div>
          
          </div>
        </div>
        <div>
            {this.state.matchinfo.map(x=>{
              return(
                <div className="match">
                <div id = "match-information">{x.gameMode} {x.gameType} {Math.floor(x.gameDuration/60)} mintutes {x.gameDuration - Math.floor(x.gameDuration / 60) * 60} seconds</div>
                                   
                    

                    
                   
                    <table className="table">
                      <thead  className="thead-dark">
                    <tr>
                    <th>Participant</th>
                    <th>Win</th>
                    
                    <th>Champ Played</th>
                    <th>Spells</th>
                    <th>K/D/A</th> 
                    <th>CS</th>
                    <th>Items</th>
                    </tr>
                    </thead>
                    <tbody>
              
                {x.participants.map((participant, i) =>{

                  return(

                    <tr>
                    
                  <td>{x.participantIdentities[i].player.summonerName}</td>
                    <td>{participant.stats.win ? "yes" : "no" }</td>
                   
                    <td>{leagueFunctions.getIdFromName(participant.championId)}</td>
                    <td> {leagueFunctions.getKeyToSpell(participant.spell1Id)}-{leagueFunctions.getKeyToSpell(participant.spell2Id)}</td>
                     <td>{participant.stats.kills}/ 
                         {participant.stats.deaths}/ 
                         {participant.stats.assists}</td>
                      <td>
                         {participant.stats.totalMinionsKilled}
                      </td>
                    <td>  {leagueFunctions.getIdToItem(participant.stats.item0)}- 
                          {leagueFunctions.getIdToItem(participant.stats.item1)}- 
                          {leagueFunctions.getIdToItem(participant.stats.item2)}-
                          {leagueFunctions.getIdToItem(participant.stats.item3)}- 
                          {leagueFunctions.getIdToItem(participant.stats.item4)}- 
                          {leagueFunctions.getIdToItem(participant.stats.item5)}- 
                          {leagueFunctions.getIdToItem(participant.stats.item6)}
                         </td>
                          
            
                      
                    </tr>

                    
                  )
                })}

                    </tbody>
                    </table>
                </div>
                
              )
            })}
        </div>
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
