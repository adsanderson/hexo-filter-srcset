'use strict';

// var lwip = require('lwip');

module.exports = function () {
    var hexo = this;
    console.log(this.route.list());
    // lwip.open('image.jpg', function(err, image){

    //   // check err...
    //   if (!err) {
    //       // define a batch of manipulations and save to disk as JPEG:
    //       image.batch()
    //         .scale(0.75)          // scale to 75%
    //         .rotate(45, 'white')  // rotate 45degs clockwise (white fill)
    //         .crop(200, 200)       // crop a 200X200 square from center
    //         .blur(5)              // Gaussian blur with SD=5
    //         .writeFile('output.jpg', function(err){
    //           // check err...
    //           // done.
    //         });
    //     }
    // });
}