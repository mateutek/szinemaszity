/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api              ->  index
 * POST    /api              ->  create
 * GET     /api/:id          ->  show
 * PUT     /api/:id          ->  update
 * DELETE  /api/:id          ->  destroy
 */

'use strict';

var cc = require('../../bin/cinemaCity');

exports.index = function(req, res) {

    // return res.json(200, cc.getData());
    cc.loadCinemaData().then(function(data) {
        res.send(data).status(200);
    });
};

exports.show = function(req, res) {

};

exports.create = function(req, res) {

};

exports.update = function(req, res) {

};

exports.destroy = function(req, res) {

};

function handleError(res, err) {
    return res.send(500, err);
}
