const express= require('express')
const app =express();
const cors = require('cors');
const port =process.env.PORT || 5000;
const data= require('./date/data.json');
const delivery=require('./date/delivery.json')


app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/services',(req,res)=>{
    res.send(data)
})
app.get('/services/:id',(req,res)=>{
    const id= req.params.id;
    const selectedService=data.find((d)=>d.id==id);
    res.send(selectedService);
})
app.get('/delivery',(req,res)=>{
    res.send(delivery);
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})