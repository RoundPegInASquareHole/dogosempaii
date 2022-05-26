var API_PATH = "/api/v1";

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