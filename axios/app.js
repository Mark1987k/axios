import express from 'express';

import axios from 'axios';

const app = express()
const port = 3001

app.use(express.json())


//const backendURL = 'https://cex.io'; 

function pingBackend() {
  axios.get(backendURL) 
    .then(response => {
      console.log('Ping gönderildi, backend aktif!');
    })
    .catch(error => {
      console.error('Ping gönderme hatası:', error);
    });
}


//const pingInterval = setInterval(pingBackend, 1);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//pingBackend();
