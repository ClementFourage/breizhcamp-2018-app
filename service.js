// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {

    var request = require('request')

    // Envoie de la requête http
    request('http://www.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }


        // TODO => une fois les données récupérées, alimenter la variable talks
        talks = body;

        request('http://www.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
            if (err) { return console.log('Erreur', err); }

            talks = talks.concat(body);

            // TODO => invoquer la callback avec le nombre de sessions récupérées
            callback(talks.length);
        });
    });
};

exports.listerSessions = function(callback){

    var request = require('request')

    request('http://www.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }

        talks = body;

        request('http://www.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
            if (err) { return console.log('Erreur', err); }

            talks = talks.concat(body);
            callback(talks);
        });
    });
};