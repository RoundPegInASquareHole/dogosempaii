const Datastore = require('nedb')
const path = require('path')
const datafile = path.join(__dirname, 'dogosempaii.db')
const db = new Datastore({ filename: datafile, autoload: true })

const API_PATH = "/api/v1"

module.exports.register = (app) => {

    app.get(API_PATH + "/loadInitialData", (req, res) => {

        var dogosempaii_initial = [
            {
                "code":"U+1F60E",
                "tag": "cool",
                "items":
                    [
                        "./imgs/dogo-1"
                    ]
            },
            {
                "code":"U+1F914",
                "tag": "thinking",
                "items":
                    [
                        "./imgs/dogo-2"
                    ]
            },
            {
                "code":"U+1F97A",
                "tag": "pleading",
                "items":
                    [
                        "./imgs/dogo-3"
                    ]
            },
            {
                "code":"U+1F633",
                "tag": "flushed",
                "items":
                    [
                        "./imgs/dogo-4"
                    ]
            },
            {
                "code":"U+1F924",
                "tag": "drooling",
                "items":
                    [
                        "./imgs/dogo-5"
                    ]
            },
            {
                "code":"U+1F630",
                "tag": "anxious",
                "items":
                    [
                        "./imgs/dogo-"
                    ]
            },
            {
                "code":"U+1F621",
                "tag": "enraged",
                "items":
                    [
                        "./imgs/dogo-"
                    ]
            },
            {
                "code":"U+1F608",
                "tag": "smiling demon",
                "items":
                    [
                        "./imgs/dogo-"
                    ]
            },
            {
                "code":"U+1F634",
                "tag": "sleepy",
                "items":
                    [
                        "./imgs/dogo-"
                    ]
            },
            {
                "code":"U+1F60D",
                "tag": "in love",
                "items":
                    [
                        "./imgs/dogo-"
                    ]
            }
        ];

    });

    app.get(API_PATH + "/dogosniff", (req, res) => {
        var query = req.query;
        var mood = query.mood;
        console.log("xd")

    });


}