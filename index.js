var express = require('express');
var request = require('request');

//slack bot credentials
var url = "https://hooks.slack.com/services/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"

//express framework
var app = express();

const PORT = 4390;

//start up server

app.listen(PORT, function () {
  console.log("Slack bot is up and running");
});

//old code
app.GET('/', function (req, res) {
  //this sends the json response
  request({
    url: url,
    method: "POST",
    json: true,
    headers: {
      "content-type": "application/json",
    },
    body:{
      text: "data"
    }
  })
  //stil need this in for now. will try fixing
  res.redirect('/');
})
