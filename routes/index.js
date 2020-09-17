const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index')
})
router.get("/summoner", (req, res, next)=>{
    res.render('index')
})
router.get("/rotation", (req, res, next)=>{
    res.render('index')
})
router.get("/rotation/classic", (req, res, next)=>{
    res.render('index')
})
router.get("/rotation/newaccounts", (req, res, next)=>{
    res.render('index')
})

router.get("/match", (req, res, next)=>{
    res.render('index')
})

router.get("/match/:region/:summonerName", (req, res, next)=>{
    res.render('index')
})

router.get("/summoner/:region/:summonerName", (req, res, next)=>{
    res.render('index')
})





module.exports = router;