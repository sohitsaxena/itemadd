 var rp = require('request-promise');
 module.exports = {
 	createApp: function (spaceID, authtoken, payload, cb) {
 		var spaceID = parseInt(spaceID);
        var reqPayload = payload;
        reqPayload.space_id = spaceID;

        //category app
        rp({
            uri: "https://api.podio.com/app?oauth_token=" + authtoken,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json"
            },
            body: reqPayload

        })
            .then(function (body) {
                return cb(null, body);
            })
            .catch(function(error){
                return cb(error, {"status": "failed"});
            });
 		// body...
 	},
    podioCreateItem: function ( appId, payload, podioaccess, callback) {

        // var userid = userobj.user_id;
        rp({
            uri: "https://api.podio.com/item/app/" + appId + "?oauth_token=" + podioaccess,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json"
            },
            body: payload,
            resolveWithFullResponse: true
        })
            .then(function (body) {
                var _data = body.body;
                var header = body.headers;
                var limit = header['x-rate-limit-limit'];
                var limitLeft = header['x-rate-limit-remaining'];

                return callback(null, _data, header);
            })
            .catch(function (error) {
                var header = error.response.headers;
                var limit = header['x-rate-limit-limit'];
                var limitLeft = header['x-rate-limit-remaining'];
                return callback(error, {"status": "failed"});
            });
    },



 };