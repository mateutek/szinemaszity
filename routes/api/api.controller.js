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
    cc.loadCinemaData();
    // return res.json(200, cc.getData());
    res.render('cinema', { data: cc.getData() });
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
