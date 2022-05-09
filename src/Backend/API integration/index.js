var api = require("gettyimages-api");
var creds = { apiKey: "your_api_key", apiSecret: "your_api_secret", username: "your_username", password: "your_password" };
var client = new api (creds);

client.downloadsimages().withId('503928206')
    .execute().then(response => {
        console.log(response.uri);
    }, err => {
        throw err;
    });