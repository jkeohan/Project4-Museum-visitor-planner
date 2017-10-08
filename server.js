const express =  require('express'); // bring express library
const app = express(); // create an instance of express

// assign a port for server to run locally
// and enable a port for future deployment
const PORT = process.env.PORT || 3000;

// set app to the root
app.get('/', function (req, res) {
  res.send('Hello from app.get')
});

// making front and back end connection
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}, in ${app.get('env')} mode.`)
});
