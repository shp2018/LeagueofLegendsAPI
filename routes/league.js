const express = require("express");
const router = express.Router();
var axios = require('axios')


router.get("/getUserInfo", (req, res, next)=>{
    const summonerName = encodeURI(req.query.summonerName);
    const region = req.query.region.trim();
    
    axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
      params: {
        api_key : process.env.API_KEY   
      },
      headers: {
          "Accept-Language": "en-US,en;q=0.9,ko;q=0.8",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      }
    }).then(result=>{
        res.json(result.data) 
    })
    .catch(err => {
        //console.log(err.toJSON())
        res.status(400).json(err.toJSON())
    })

})

router.get("/getMastery", (req, res, next) => {
    const summonerId = req.query.summonerId;
    const region = req.query.region.trim();
    console.log(summonerId);
    axios.get(`https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`, {
        params :{
            api_key : process.env.API_KEY
        }
    }).then(mas=>{
        res.json(mas.data)
    })
    .catch(err => res.status(400).send(err));
})


router.get("/getRank", (req, res, next) => {
    const summonerId = req.query.summonerId
    const region = req.query.region.trim();
    axios.get(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`, {
        params :{
            api_key : process.env.API_KEY,
           
        }
    }).then(rank=>{
        console.log(summonerId)
        res.json(rank.data)
    })
    .catch(err => res.status(400).send(err));
})

router.get("/getMatchHistory", (req, res, next) => {
    const accountId = req.query.accountId;
    const region = req.query.region.trim();
    axios.get(`https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`, {
        params :{
            api_key : process.env.API_KEY,
           
        }
    }).then(match=>{
        console.log(accountId)
        res.json(match.data)
    })
    .catch(err => res.status(400).send(err));
})

router.post("/getMatchInfo", (req, res, next)=>{
    const gameIds = req.body.gameIds;
    const region = req.body.region
    let getRequestPromises = gameIds.map(x=>{
        return new Promise((resolve, reject) => {
            try {
                resolve(axios.get(`https://${region}.api.riotgames.com/lol/match/v4/matches/${x}`, {
                    params :{
                        api_key: process.env.API_KEY,   
                    }
                })
                .catch(err => {
                    reject(x)
                }))
            } catch {
                reject(x)
            }
        })
    })
    Promise.all(getRequestPromises)
    .then(result => {
        let noUndefined = result.filter(x => x !== undefined);
        let gameData = noUndefined.map(x => x.data)
        res.send(gameData);
      })
      .catch(err => {
          console.log(err, "bleh")
      })
})

router.get("/freeRotation",(req,res,next)=>{
   
    axios.get(`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations`,{
        params:{
            api_key : process.env.API_KEY,
           
        }
    }).then(rot=>{
        res.json(rot.data)
    })
    

    
})



module.exports = router;




