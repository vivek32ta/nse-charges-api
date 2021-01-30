const express = require("express");
const router = express.Router();
const operations = require('../src/operations')

router.get('/intraday-equity/:buyPrice/:sellPrice/:quantity',  function (req, res) {    
    try {
        if ((!isNaN(req.params.buyPrice)) && (!isNaN(req.params.sellPrice)) && (!isNaN(req.params.quantity))) {
            buyPrice = Number(req.params.buyPrice);
            sellPrice = Number(req.params.sellPrice);
            quantity = Number(req.params.quantity);
            let result = operations.calculateIntradayEquity(buyPrice,sellPrice,quantity)
            res.status(200).json(result);
            
        }
        else{
            res.status(400).send("Invalid Input")
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Some Error Occurred")
    }
})

router.get('/delivery-equity/:buyPrice/:sellPrice/:quantity',  function (req, res) {    
    try {
        if ((!isNaN(req.params.buyPrice)) && (!isNaN(req.params.sellPrice)) && (!isNaN(req.params.quantity))) {
            buyPrice = Number(req.params.buyPrice);
            sellPrice = Number(req.params.sellPrice);
            quantity = Number(req.params.quantity);
            let result = operations.calculateDeliveryEquity(buyPrice,sellPrice,quantity)
            res.status(200).json(result);
            
        }
        else{
            res.status(400).send("Invalid Input")
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Some Error Occurred")
    }
})

router.get('/futures/:buyPrice/:sellPrice/:quantity',  function (req, res) {    
    try {
        if ((!isNaN(req.params.buyPrice)) && (!isNaN(req.params.sellPrice)) && (!isNaN(req.params.quantity))) {
            buyPrice = Number(req.params.buyPrice);
            sellPrice = Number(req.params.sellPrice);
            quantity = Number(req.params.quantity);
            let result = operations.calculateFutures(buyPrice,sellPrice,quantity)
            res.status(200).json(result);
            
        }
        else{
            res.status(400).send("Invalid Input")
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Some Error Occurred")
    }
})

router.get('/options/:buyPrice/:sellPrice/:quantity', function (req, res) {    
    try {
        if ((!isNaN(req.params.buyPrice)) && (!isNaN(req.params.sellPrice)) && (!isNaN(req.params.quantity))) {
            buyPrice = Number(req.params.buyPrice);
            sellPrice = Number(req.params.sellPrice);
            quantity = Number(req.params.quantity);
            let result = operations.calculateOptions(buyPrice,sellPrice,quantity)
            res.status(200).json(result);
            
        }
        else{
            res.status(400).send("Invalid Input")
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Some Error Occurred")
    }
})

module.exports = router