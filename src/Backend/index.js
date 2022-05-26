var path = require('path');
//var Datastore = require('nedb');

//const datafile = path.join(__dirname, 'dogomoods.db');
//const db = new Datastore({ filename: datafile, autoload: true });

var API_PATH = "/api/v1";
var request = require("request");
var express = require("express");

var imgPath = "C:\Users\alex_\Desktop\dogosempaii\dogosempaii\src\Frontend\imgs"
var dbContent =
{
    "mood":
        [
            {
                "id": "sad",
                "items":
                    [
                        imgPath + "\dogo-image-prueba-1.jpg",
                        imgPath + "\dogo-image-prueba-2.jpg",
                        imgPath + "\dogo-image-prueba-3.jpg",
                        imgPath + "\dogo-image-prueba-4.jpg",
                        imgPath + "\dogo-image-prueba-5.jpg"
                    ]
            }
        ]
}

module.exports.register = (app) => {

    app.get(API_PATH + "/dogosniff", (req, res) => {
        var query = req.query;
        var mood = query.mood; //user's moods

        //

    });

    app.get(API_PATH + "/loadInitialData", (req, res) => {
        var query = req.query;
        var mood = query.mood; //user's moods

        //

    });


}