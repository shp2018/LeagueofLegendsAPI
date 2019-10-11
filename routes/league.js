const express = require("express");
const router = express.Router();
var axios = require('axios')


router.get("/getUserInfo", (req, res, next)=>{
    const summonerName = req.query.summonerName;
    
    console.log(summonerName);
    axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName, {
      params: {
        api_key : process.env.API_KEY,
        summonerName : req.query.summonerName

      }  
    }).then(result=>{
        res.json(result.data) 
    })
    .catch(err => {
        console.log(err);
    })

})

router.get("/getMastery", (req, res, next) => {
    const summonerId = req.query.summonerId
    axios.get("https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summonerId, {
        params :{
            api_key : process.env.API_KEY,
            summonerId : summonerId
        }
    }).then(mas=>{
        res.json(mas.data)
    })
    .catch(err => console.log(err));
})



module.exports = router;



