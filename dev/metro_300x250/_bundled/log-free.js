(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.from('.t1', .3, { opacity: 0 }, '+=.3');
	tl.to('.t1', .3, { opacity: 0 }, '+=1');

	tl.add('t3');
	tl.from('.t3a', .3, { opacity: 0 }, 't3');
	tl.from(['.logo_royal', '.logo_spot'], .3, { opacity: 0 }, 't3');

	tl.add('t3b', "+=3");
	tl.to('.t3a', .3, { y: 0 }, "t3b");
	tl.from('.t3b', .3, { opacity: 0 }, "t3b");
	tl.from('.logo_spot', .3, { opacity: 0 }, "t3b");
	tl.from('.cta', .3, { opacity: 0, y: "+=15" }, "+=.1");
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
