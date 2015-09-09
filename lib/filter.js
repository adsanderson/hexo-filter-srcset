'use strict';

var parse5 = require('parse5');
var _ = require('lodash');

//Instantiate parser
var parser = new parse5.Parser();
//Instantiate new serializer with default tree adapter
var serializer = new parse5.Serializer();

function findImages(childNodes) {
    for (var i = childNodes.length - 1; i >= 0; i--) {
        if (childNodes[i].tagName === 'img') {
            updateImageTag(childNodes[i]);
        }
        if (childNodes[i].childNodes) {
            findImages(childNodes[i]);
        }
    }

}

function returnSrcValue (imageNode) {
    for (var i = imageNode.attrs.length - 1; i >= 0; i--) {
        if(imageNode.attrs[i].name === 'src') {
            return imageNode.attrs[i].value;
        }
    }
}

function updateImageTag(imageNode) {
    var srcValue = returnSrcValue(imageNode);
    imageNode.attrs.push({
        name: 'srcset',
        value: srcValue + ' 2x'
    });
}

module.exports = function(data) {
    var parsedDom = parser.parseFragment(data.content);
    // console.log(data.content);
    findImages(parsedDom.childNodes);
    // JSON.stringify(parsedDom);
    data.content = serializer.serialize(parsedDom);
    return data;
};