const express =  require('express'); // bring express library
const app = express(); // create an instance of express

// assign a port for server to run locally
// and enable a port for future deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}, in ${app.get('env')} mode.`)
})
