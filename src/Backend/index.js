var path = require('path');
var Datastore = require('nedb');

const datafile = path.join(__dirname, 'dogomoods.db');
const db = new Datastore({ filename: datafile, autoload: true });