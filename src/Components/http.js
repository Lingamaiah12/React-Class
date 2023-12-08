

const express  = require('express');

const app = express()

app.get('/tblproducts',(req,res)=>{
    res.send('server started')
})

app.listen(4500,()=>{
    console.log('server started')
})

