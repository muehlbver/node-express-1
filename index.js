const express = require('express')
const app = express()

const server = require ('http').createServer(app)

const port = 3000

const axios = require('axios')
const pokeapi = 'https://pokeapi.co/api/v2/'

server.listen(port, function() {

  console.log('Websaver läuf. Pott: %d', port)
})

app.get('/', (req, res) => {
//console.log(req);
//res.send('hällo ägän (not)')
axios
  .get(pokeapi + 'pokemon/zekrom')
  .then(response =>{
     res.send
     ('<img src= " ' +
  response.data.sprites.other['official-artwork'].front_default +
  '">'
     );
}).catch(error => {
  console.log(error)
  res.send(error)
})
});