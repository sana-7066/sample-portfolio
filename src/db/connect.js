require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.HOST,{useNewUrlParser:true, useUnifiedTopology : true},10000)
.then(() => console.log('connection successful'))
.catch((err) => console.log('Error :' +err));