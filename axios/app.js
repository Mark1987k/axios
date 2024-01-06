import express from 'express';

import axios from 'axios';

const app = express()
const port = 3001

app.use(express.json())


const backendURL = 'https://tradingeconomics.com'; 

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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


pingBackend();
