var path = require('path');
//var Datastore = require('nedb');

//const datafile = path.join(__dirname, 'dogomoods.db');
//const db = new Datastore({ filename: datafile, autoload: true });

var API_PATH = "/api";
var request = require("request");
var express = require("express");

var api = require("gettyimages-api.js");
var creds = { apiKey: "your_api_key", apiSecret: "your_api_secret", username: "your_username", password: "your_password" };
var client = new api(creds);

module.exports.register = (app) => {

    app.get(API_PATH + "/dogosniff", (req, res) => {
        var query = req.query;
        var mood = query.mood; //user's moods

        client.searchimagescreative().withPage(1).withPageSize(1).withPhrase(mood)
            .execute().then(response => {

                console.log(JSON.stringify(response.images[0]));
                client.downloadsimages().withId(response.images[0].id)
                    .execute().then(response => {
                        console.log(response.uri);
                    }, err => {
                        throw err;
                    });

            }, err => {
                throw err;
            });

    });


}