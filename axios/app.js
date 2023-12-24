import express from 'express';

import axios from 'axios';

const app = express()
const port = 3001

app.use(express.json())


const backendURL = 'https://www.hb-studios.com'; 

function pingBackend() {
  axios.get(backendURL) 
    .then(response => {
      console.log('Ping gönderildi, backend aktif!');
    })
    .catch(error => {
      console.error('Ping gönderme hatası:', error);
    });
}


const pingInterval = setInterval(pingBackend, 1);
const pingInterval2 = setInterval(pingBackend, 1);
const pingInterval3 = setInterval(pingBackend, 1);
const pingInterval4 = setInterval(pingBackend, 1);
const pingInterval5 = setInterval(pingBackend, 1);
const pingInterval6 = setInterval(pingBackend, 1);
const pingInterval7 = setInterval(pingBackend, 1);
const pingInterval8 = setInterval(pingBackend, 1);
const pingInterval9 = setInterval(pingBackend, 1);
const pingInterval10 = setInterval(pingBackend, 1);
const pingInterval11 = setInterval(pingBackend, 1);
const pingInterval12 = setInterval(pingBackend, 1);
const pingInterval13 = setInterval(pingBackend, 1);
const pingInterval14 = setInterval(pingBackend, 1);
const pingInterval15 = setInterval(pingBackend, 1);
const pingInterval16 = setInterval(pingBackend, 1);
const pingInterval17 = setInterval(pingBackend, 1);
const pingInterval18 = setInterval(pingBackend, 1);
const pingInterval19 = setInterval(pingBackend, 1);
const pingInterval20 = setInterval(pingBackend, 1);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


pingBackend();
