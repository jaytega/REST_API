//after express is installed, we must require it as a module
const express = require('express');
//import routes
const routes = require('./routes/api');

//run express constructor and const assign it to a variable
const app = express();

//since routes are now imported, express has to "use" them
//the first parameter is the path we want to have (if any) placed
//before our routes
app.use('/api', routes);


//now that express is running, we should listen for requests
//first parameter is an environment variable for use with things
//like Heroku, OR if no env variable found, use port 3000
app.listen(process.env.port || 3000,function(){ //last step is to fire callback
  console.log('Test-ping to let you know IM LISTENING!');
})
