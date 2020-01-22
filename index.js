//after express is installed, we must require it as a module
const express = require('express');

const bodyParser = require('body-parser');

//run express constructor and const assign it to a variable
const app = express();

//for this app to work i need middleware called BodyParser
//so that i can pull things like POST requests from api.js

//body parser needs to go first in the cycle of app.use()
//bodyParser can accept many different types but I will be using
//json data so we call that function on the bodyParser object
app.use(bodyParser.json());

//since routes are now imported, express has to "use" them
//1st parameter is the path we want to have (if any) placed before our routes
//the second paramater uses require to directly pass in the api.js
app.use('/api', require('./routes/api'));


//now that express is running, we should listen for requests
//first parameter is an environment variable for use with things
//like Heroku, OR if no env variable found, use port 3000
app.listen(process.env.port || 3000,function(){ //last step is to fire callback
  console.log('Test-ping to let you know IM LISTENING!');
})
