const express = require('express');
const user = require('../controller/user')
const route = express.Router();

route.get('/',user.controle);
route.get('/save',user.store);
route.post('/save',user.data);
route.get('/edit/:id',user.edit);
module.exports = route;