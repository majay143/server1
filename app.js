const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello World");
})
const PORT = process.env.PORT || 3002
app.listen(PORT)
console.log(`app is running succesfully on ${PORT}`)