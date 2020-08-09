const dotenv = require('dotenv');
dotenv.config();

// importing modules
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');


// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true,}));

projectData={};
app.get('/', function(req, res) {
  res.send(projectData);
})

// server test route
app.post('/addData',addWeatherData);
function addWeatherData(req,res)
{
    projectData={
        place:req.body.place,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        countryName:req.body.countryName,
        lat:req.body.lat,
        lng:req.body.lng,
        image:req.body.image

    }
    // projectData.push(newEntry)
    res.send(projectData)
    console.log(projectData)
}
// to set the server up at the defined port
app.listen(3001, () => {
  console.log('Server up on port 3001');
});
module.exports = app;
