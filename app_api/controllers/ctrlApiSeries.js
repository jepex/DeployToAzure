const mongoose = require('mongoose');

const seriesModel = mongoose.model('series');

const winnersList = function (req, res) {
     seriesModel.find({}, function(err, winners){
       if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(winners);
        }
    });};

  const addWinner = function (req, res) {
    seriesModel.create(req.body, function(err, newWinner) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newWinner);
        }
    });
  };

  module.exports = {
    winnersList,
    addWinner
  };
