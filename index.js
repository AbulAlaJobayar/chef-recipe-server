const express= require('express')
const app =express();
const cors = require('cors');
const port = 5000;
app.use(cors())
const data= require('./date/data.json')

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/news',(req,res)=>{
    res.send(data)
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})