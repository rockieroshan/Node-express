const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config');
const postRoutes = require('./routes/post');
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors());

const arr = [{
    Name:"Jill",
    Age:26
}];
app.use('/posts', postRoutes);


app.get('/', (req, res) => {
    res.send(arr)
});

mongoose.connect(process.env.DATABASE_CONNECTION,{ useNewUrlParser: true }, ()=> {
    console.log("DB!")
});

mongoose.connection.on('error', err => {
    console.log(err);
  });
app.listen(3000, ()=>{
    console.log("***Start!")
});

//npm install -S @angular/material @angular/cdk @angular/animations
//npm uninstall @angular/core
//npm install -S @angular/core
//  "styles": [
//               "src/styles.scss",
//               "node_modules/bootstrap/dist/css/bootstrap.min.css",
//               "node_modules/primeicons/primeicons.css",
//               "node_modules/primeng/resources/themes/nova-light/theme.css",
//               "node_modules/primeng/resources/primeng.min.css"
//             ],
