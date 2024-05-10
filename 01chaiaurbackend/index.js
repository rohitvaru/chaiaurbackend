const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/express',(req,res)=>{
    res.send("express server is work properly bro")
})

app.get('/youtube',(req,res)=>{
    res.send("<h1 style='color:red'> This is animator_rd_444 h1 tag</h1>")
})



app.listen(process.env.port, () => {
  console.log(`http://localhost:${port}`)
})