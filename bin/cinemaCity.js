"use strict";

var cc = module.exports = {};
var request = require('request');
var debug = require('debug')('cinema-city:data');
var Promise = require('bluebird');


var data = {};

cc.loadCinemaData = function(){
    var options = { method: 'POST',
        url: 'https://www.cinema-city.pl/scheduleInfoRows',
        headers: {
            'cache-control': 'no-cache',
            cookie: '__utmt=1; wm_snatch=1; __utma=218714251.412080983.1477678640.1479976349.1480189590.3; __utmb=218714251.2.10.1480189590; __utmc=218714251; __utmz=218714251.1480189590.3.3.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); JSESSIONID=05EE665A36F106884A781AFD2A416712; TS01e885cb=01d60216a7eda8088f03423d4dfbce857b817a90fd4957fb48ef3e28b1fd9cc572a15a428b82b76fc64d82a74b87b744b99b47530d; active_menu=109; default_subsiteid=1010311_0',
            'accept-language': 'pl',
            'accept-encoding': 'gzip, deflate, br',
            referer: 'https://www.cinema-city.pl/',
            dnt: '1',
            'content-type': 'application/x-www-form-urlencoded',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2922.1 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            origin: 'https://www.cinema-city.pl',
            accept: '*/*'
        },
        form: {
            date:'30/11/2016',
            locationId:'1010311',
            venueTypeId:0
        } };
    return new Promise(function(resolve, reject){
        request.post(options,
            function (error, response, body) {
                debug('Data set to ');
                debug(body);
                cc.setData(body);
                if(error){
                    reject(error);
                }else{
                    resolve(data);
                }
            });
    });

};

cc.setData = function(d){
  data = d;
};

cc.getData = function(){

};
