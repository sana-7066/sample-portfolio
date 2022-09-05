require('dotenv').config();
const express = require('express');
const app = express();
require('./db/connect');
const user = require('./modals/user');
const port = process.env.PORT || 5000;
const path = require('path');
const public = path.join(__dirname,'../public');

app.use(express.urlencoded({extended : false}));
app.use(express.static(public));

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index')//views--> hbs file
})

app.post('/',async(req,res)=>
{
    const data = new user(req.body);
    try{
       
         const result = await data.save();
         res.status(201).send(`your data is added , Sana will contact you soon have nice day :)`);
       
    }
    catch(err)
    {
        res.status(400).send('Something went wrong'+err);
    }

})
app.listen(port,() =>{
    console.log('server is started at '+port)
});