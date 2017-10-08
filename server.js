const express =  require('express'); // bring express library
const app     = express(); // create an instance of express

// bring all dependencies
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

// assign a port for server to run locally
// and enable a port for future deployment
const PORT = process.env.PORT || 3000;

//set up logger and body-parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, }));


//================= SETTING ROUTES ==================== //

// planner routes
//const plannerRoutes = require('./routes/plannerRoutes');

// set app to the root
app.get('/', function (req, res) {
  res.send('Hello from app.get')
});

// handle 404 error
app.get('*', function(req, res) {
  res.status(404).send({message: 'Not found!'})
});

// making front and back end connection
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}, in ${app.get('env')} mode.`)
});
