const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

app.get("/",(req,res)=>{
    res.send("Hello EveyOne!!!")
})

app.get('/.wellknown/stellar.toml', (req, res, next) => {
    const options = {
      root: path.join(__dirname, 'public'),
      headers: {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      }
    }
    res.sendFile('stellar.txt', options);
  })

app.listen(port,()=>{
    console.log(`App is Running Locally on Port http://localhost:${port}`)
})