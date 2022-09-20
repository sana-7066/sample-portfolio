require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.HOST,{useNewUrlParser:true, useUnifiedTopology : true})
.then(() => console.log('connection successful'))
.catch((err) => console.log('Error :' +err));