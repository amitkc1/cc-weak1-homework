var express = require('express');
var app = express();
var cors = require('cors');
var mongooose = require('mongoose');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

