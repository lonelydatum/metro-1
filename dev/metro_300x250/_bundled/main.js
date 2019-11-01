(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

console.log(_commonJsCommonJs.size);

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	var w = _commonJsCommonJs.size.w * 2;
	var h = _commonJsCommonJs.size.h * 2;

	var tl_border = new TimelineMax();

	var BORDER_TIME = .2;
	tl_border.from('.border_1', BORDER_TIME, { clip: 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)', ease: Linear.easeNone });
	tl_border.from('.border_2', BORDER_TIME, { clip: 'rect(' + h + 'px ' + h + 'px ' + w + 'px 0px)', ease: Linear.easeNone });
	tl_border.from('.border_3', BORDER_TIME, { clip: 'rect(0px 0px ' + h + 'px 0px)', ease: Linear.easeNone });
	tl_border.from('.border_4', BORDER_TIME, { clip: 'rect(0px ' + w + 'px 0px 0px)', ease: Linear.easeNone });

	tl.add('start', .8);
	tl.from('.logo_metro', .7, { opacity: 0 }, 'start');
	tl.from('.line_hor', .7, { clip: 'rect(0px 0px ' + h + 'px 0px)', ease: Power2.easeOut }, 'start');
	tl.from('.logo_ls', .3, { opacity: 0 });
	tl.to(".f1", .35, { opacity: 0 }, '+=1.2');

	tl.from('.t1', .5, { opacity: 0 }, '+=.3');

	tl.to('.t1', .3, { opacity: 0 }, '+=2');

	tl.from('.t2', .5, { opacity: 0 });
	tl.from('.logo_royal', .5, { opacity: 0 }, '+=.3');
	tl.to('.f2', .3, { opacity: 0 }, '+=3.3');

	tl.from('.logos', .3, { opacity: 0 });

	tl.from('.cta', .5, { opacity: 0, y: "+=20" }, "end");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
