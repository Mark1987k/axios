import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(express.json());

const backendURL = 'https://www.hb-studios.com';

function sendTenThousandRequests() {
  for (let i = 0; i < 10000; i++) {
    axios.get(backendURL)
      .then(response => {
        console.log('Ping gönderildi, backend aktif!');
      })
      .catch(error => {
        console.error('Ping gönderme hatası:', error);
      });
  }
}


setInterval(sendTenThousandRequests, 1000);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  sendTenThousandRequests(); 
});
