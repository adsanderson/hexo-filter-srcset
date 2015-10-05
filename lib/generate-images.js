'use strict';

var Jimp = require("jimp");

function getRouteExtension (route) {
    var routePathElements = route.split('.')
    return routePathElements[routePathElements.length -1];
}

function filterToImages (route) {
    var routeExtension = getRouteExtension(route);
    if (routeExtension === 'png' ||
        routeExtension === 'jpg' ||
        routeExtension === 'jpeg') {
        console.log('IMAGE', route);
        return true;
    }
    return false;
}

function generateImagesFromRouteImage (route) {
    var lenna = new Jimp('public/' + route, function (err, image) {
        console.log(err);
        if (!err) {
            this.resize(512, 512)
            .write("public/lenna-small.png"); // save                     
        }
    });
}

module.exports = function () {
    var hexo = this;

    var routes = this.source.processingFiles;
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!    AFTER GENERATE,', hexo.source);

    routes
    // .filter(filterToImages)
    // .map(generateImagesFromRouteImage);
}