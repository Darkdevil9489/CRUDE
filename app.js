const express = require('express');
const app = express();
const sql = require('mysql');
// const env = require('dotenv');
const hbs = require('hbs');
const path = require('path');
const route = require('./router/route');
const bodyparser = require('body-parser')


app.set('view engine','hbs');
app.use(bodyparser.urlencoded({extended:false}));

// env.config({
//     path:'./.env'
// })

// const dp = sql.createConnection({
//     host:process.env.database_host,
//     user:process.env.database_user,
//     password:process.env.database_password,
//     database:process.env.crude
// })

// dp.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('the sql is connected')
//     }
// });

const locate = (path.join(__dirname,'public'));
app.use(express.static(locate));

app.use(route);


app.listen(3000,()=>{
    console.log('the server is running 3000')
})