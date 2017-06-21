var express = require('express');
var request = require('request');

//slack bot credentials
var url = "https://hooks.slack.com/services/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"


var app = express();

const PORT = 4390;

//start up server
app.listen(PORT, function () {
  console.log("Slack bot is up and running");
});

//the route which sends the data to slack
//testing out the idea of using parameters to send the data
//can stack them up and then put them into the body which sends to slack
app.get('/slackroute/:param1/:param2', function (req, res) {
  //variables for the parameters
  var data = req.params.param1;
  var test = req.params.param2;

  if(data && test != null){
    //this sends the json response
    request({
      url: url,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body:{
        text: "there has been: " + data + " fails today " + test
      }
    })
  }

  //pretty jagged hack for now
  //todo see if this causes me any problems
  res.send();
})
